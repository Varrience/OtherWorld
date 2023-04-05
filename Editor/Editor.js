// Type your JavaScript code here.
// ==UserScript==
// @name         OtherWorld CDO Editor
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  An fork of the Monaco editor, an editor extension for code.org that uses monaco, which powers VSCode.
// @author       The OtherWorld team & owokoyo
// @match        https://studio.code.org/projects/*/*/edit
// @icon         https://www.google.com/s2/favicons?domain=code.org
// @grant        none
// ==/UserScript==
if (!window.location.href.match(/(^(https:\/\/studio\.code\.org).*(view|edit).*$)/gi)) {
    document.resize = function(){
    const adjust = window.innerHeight/400 - 0.05;
document.write('<html style="background: black;"><head style="background: black;">');
document.write('<html><head><style>');
document.write('#wrapper { width: 100%; height: 100%; padding: 0; overflow: hidden; }');
document.write(`#scaled-frame { width: ${window.outerWidth/1.55}px; height: ${400*adjust}px; border: 0px}`);
document.write('#scaled-frame {');
document.write(`    zoom: scale(${adjust});`);
document.write(`    -moz-transform: scale(${adjust});`);
document.write('    -moz-transform-origin: 0 0;');
document.write(`    -o-transform: scale(${adjust});`);
document.write('    -o-transform-origin: 0 0;');
document.write(`    -webkit-transform: scale(${adjust});`);
document.write('    -webkit-transform-origin: 0 0;');
document.write('}');
document.write('');
document.write('@media screen and (-webkit-min-device-pixel-ratio:0) {');
document.write(' #scaled-frame  { zoom: 1;  }');
document.write('}');
document.write('</style>');
document.write('');
document.write(`</head"><body><div id="wrapper"><iframe id="scaled-frame" src=${location.href}${location.href.indexOf("/embed") < 0 ? "/embed": ""}></iframe></div></body></html>`);
    }
    throw new Error("NO EDITOR");
}
console.log("VALID EDITOR PREPPING NOW...");
/**
 * Loads the monaco editor and returns the editor instance and the monaco instance
 * @returns {[Promise<MonacoEditor>, Promise<MonacoEditor>]} [editor, monaco] - editor is the editor instance, monaco is the monaco instance
 * @example [editor, monaco] = await load()
 */
function load() {
    // Can be either Applab or Gamelab
    const mode = appOptions.app;

    // Can be either light or dark, default will always be light
    const theme = "vs";

    /**
     * Prepares the editor by loading the monaco editor
     * @type {Promise<MonacoEditor>}
     * @returns {Promise<MonacoEditor>} 
     */
    function prepareEditor() {
        return new Promise((res) => {
            $.getScript(
                `https://cdn.jsdelivr.net/npm/monaco-editor@0.23.0/min/vs/loader.js`,
                function () {
                    require.config({
                        paths: {
                            vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.23.0/min/vs",
                        },
                    });
                    require(["vs/editor/editor.main"], res);
                }
            );
        });
    }

    /**
     * Loads the typescript language service and returns the language service
     * @returns {Promise<MonacoEditor>}
     */
    function loadTS() {
        return new Promise((res) => {
            $.getScript(
                `https://unpkg.com/typescript@5.0.2/lib/typescript.js`,
                function () {
                    res();
                }
            );
        });
    }

    /**
     * Imports types for Applab and Gamelab
     * @returns {Promise<MonacoEditor>}
     */
    function importTypes() {

        // You can view other typings here: 
        // https://github.com/owokoyo/cdo-sync/tree/master/resources/types

        const typings = {
            gamelab: {
                "types/index.d.ts":
                    "https://raw.githubusercontent.com/owokoyo/cdo-sync/master/resources/types/p5.d.ts",
            },
            // gamelab: {"types/p5/global.d.ts":"https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/p5/global.d.ts", "types/p5/index.d.ts":"https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/p5/index.d.ts", "types/p5/constants.d.ts": "https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/p5/constants.d.ts"},
            applab: {
                "types/applab.d.ts":
                    "https://raw.githubusercontent.com/owokoyo/cdo-sync/master/resources/types/applab.d.ts",
                "types/applab-autofill.d.ts":
                    "https://raw.githubusercontent.com/owokoyo/cdo-sync/master/resources/types/applab-autofill.d.ts",
            },
        };

        return new Promise((resolve) => {
            const id = setInterval(() => {
                if ("id" in appOptions.level) {
                    clearInterval(id)
                    resolve()
                    if ("libraries" in appOptions.level && appOptions.level.libraries.find(lib => lib.name === "Nomx")) {
                        typings.applab["types/nomx.d.ts"] = "https://raw.githubusercontent.com/owokoyo/cdo-sync/master/resources/types/nomx.d.ts"
                    }
                }
            }, 1000)
        }).then(_ => Promise.all(
            Object.keys(typings[mode]).map((path) =>
                fetch(typings[mode][path])
                    .then((e) => e.text())
                    .then((e) => (typings[mode][path] = e))
            )
        ).then((e) => typings[mode]));
    }

    /**
     * Gets the source code of the TypeScript file and parses it
     * @param {string} source 
     * @returns {string} The source code of the TypeScript file
     */
    function getTsSource(source) {
        const matchResult = source.match(
            /\/\/# sourceMappingURL=data:application\/json;base64,(.+)/
        );
        let tsContent = null;
        if (matchResult) {
            try {
                tsContent = JSON.parse(
                    atob(matchResult[1])
                ).sourcesContent.join("");
            } catch (e) { }
        }
        return tsContent;
    }

    /**
     * Loads the editor
     * @returns {Promise<MonacoEditor>}
     * @example await loadEditor()
     */
    function loadEditor() {

        document.getElementById("hide-toolbox-icon").click();

        const node = document.querySelector(".ace_editor");
        const editorNode = document.createElement("DIV");
        node.parentNode.prepend(editorNode);
        editorNode.setAttribute("style", node.getAttribute("style"));
        editorNode.style.position = "absolute";
        editorNode.style.inset = "0px";

        const diffNode = document.createElement("DIV");
        node.parentNode.prepend(diffNode);
        diffNode.setAttribute("style", node.getAttribute("style"));
        diffNode.style.visibility = "hidden";
        diffNode.style.userSelect = "none";
        diffNode.style.position = "absolute";
        diffNode.style.inset = "0px";

        node.style.display = "none";
        document.head.innerHTML +=
            "<style>.main {padding: 0px} #versions-header{display: unset !important}</style>";

        const aceEditor = ace.edit(node);
        var editor = monaco.editor.create(editorNode, {
            target: "es5",
            theme,
            automaticLayout: true,
        });

        let isTypescript = editor.createContextKey("isTypescript", false);

        var workspaceHeaderSpan = document.getElementById(
            "workspace-header-span"
        );

        function debounce(func, timeout = 1000) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
        }

        const jsModel = monaco.editor.createModel(
            aceEditor.getValue(),
            "javascript"
        );
        const tsModel = monaco.editor.createModel(
            "//empty for now (ts)",
            "typescript",
            monaco.Uri.parse("file:///main.tsx")
        );

        let tsContent = getTsSource(aceEditor.getValue());

        if (tsContent) {
            tsModel.setValue(tsContent);
            editor.setModel(tsModel);
            isTypescript.set(true);
            workspaceHeaderSpan.textContent = "(TS) Workspace"
        } else {
            editor.setModel(jsModel);
        }

        const compile = debounce(() => {
            aceEditor.setValue(
                ts.transpile(tsModel.getValue(), {
                    inlineSourceMap: true,
                    inlineSources: true,
                    jsx: "react",
                    jsxFactory: "Nomx.create",
                })
            );
            workspaceHeaderSpan.textContent = "(TS) Workspace";
        });

        jsModel.onDidChangeContent((e) => {
            if (!isTypescript.get()) {
                aceEditor.setValue(jsModel.getValue());
            }
        });

        tsModel.onDidChangeContent((e) => {
            if (isTypescript.get()) {
                workspaceHeaderSpan.textContent = "(TS) Workspace - Compiling...";
                compile();
            }
        });

        editor.addAction({
            id: "use-typescript",
            label: "Use Typescript",
            precondition: "!isTypescript",
            run: () => {
                tsModel.setValue(jsModel.getValue());
                editor.setModel(tsModel);
                isTypescript.set(true);
                workspaceHeaderSpan.textContent = "(TS) Workspace"
            },
        });

        if (!("libraries" in appOptions.level) || !appOptions.level.libraries.find(lib => lib.name === "Nomx")) {
            editor.addAction({
                id: "add-nomx",
                label: "Add Nomx (Save Your Changes Before Running)",
                run: () => {
                    fetch(`https://studio.code.org/v3/sources/${appOptions.channel}/main.json`).then(e => e.json()).then((a) => {
                        fetch(`https://studio.code.org/v3/sources/IKsU284j25uIUN783n6wEjNgGvbWRiTFtX8FsKGzwc8/main.json`).then(e => e.json()).then(b => {
                            a.libraries = a.libraries || [];
                            a.libraries.push({ name: "Nomx", description: "Added via cdo monaco.", functions: [], dropletConfig: [], source: b.source })
                            fetch(`https://studio.code.org/v3/sources/${appOptions.channel}/main.json`, { method: "PUT", body: JSON.stringify(a) })
                        })
                    })
                },
            });
        }

        editor.addAction({
            id: "use-javascript",
            label: "Use Javascript (You will lose your typescript source!)",
            precondition: "isTypescript",
            run: () => {
                jsModel.setValue(aceEditor.getValue().replace(/\/\/# sourceMappingURL=data:application\/json;base64,(.+)/, ""))
                editor.setModel(jsModel);
                isTypescript.set(false);
                workspaceHeaderSpan.textContent = "Workspace"
            },
        });

        // New Actions implemented for the OtherWorld editor

        editor.addAction({
            id: "toggle-dark-theme",
            label: "Toggle Theme",
            run: () => {
                monaco.editor.setTheme("vs-dark");
            },
        });

        editor.addAction({
            id: "toggle-light-theme",
            label: "Toggle Light Theme",
            run: () => {
                monaco.editor.setTheme("vs");
            },
        });

        editor.addAction({
            id: "toggle-readonly",
            label: "Toggle Readonly",
            run: () => {
                editor.updateOptions({ readOnly: !editor.getOption(monaco.editor.EditorOption.readOnly) });
            },
        });

        editor.addAction({
            id: "create-version",
            label: "Create Version",
            contextMenuGroupId: "navigation",
            run: () => {
                const appName = prompt("Application Name (e.g. My App)");
                if (!appName) return;
                
                const version = prompt("Version Number (e.g. 1.0.0)");
                if (!version) return;

                const date = new Date();
                const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

                const user = prompt("User Name (e.g. John Doe)");
                if (!user) return;

                const comment = `// ${appName}\n// Version ${version}\n// Created at ${dateString}\n// ${user}\n\n`;

                editor.setPosition({ lineNumber: 1, column: 1 });
                editor.trigger("keyboard", "type", { text: comment });
            },
        });

        editor.addAction({
            id: "Go-to-line",
            label: "Go to Line",
            contextMenuGroupId: "navigation",
            run: () => {
                const line = prompt("Line Number");
                if (!line) return;
                editor.setPosition({ lineNumber: parseInt(line), column: 1 });
            },
        });

        editor.addAction({
            id: "Go-to-column",
            label: "Go to Column",
            contextMenuGroupId: "navigation",
            run: () => {
                const column = prompt("Column Number");
                if (!column) return;
                editor.setPosition({ lineNumber: editor.getPosition().lineNumber, column: parseInt(column) });
            },
        });

        editor.addAction({
            id: "Zoom-in",
            label: "Zoom In",
            contextMenuGroupId: "navigation",
            run: () => {
                editor.updateOptions({ fontSize: editor.getOption(monaco.editor.EditorOption.fontSize) + 1 });
            },
        });

        editor.addAction({
            id: "Zoom-out",
            label: "Zoom Out",
            contextMenuGroupId: "navigation",
            run: () => {
                editor.updateOptions({ fontSize: editor.getOption(monaco.editor.EditorOption.fontSize) - 1 });
            },
        });

        editor.addAction({
            id: "Zoom-reset",
            label: "Zoom Reset",
            contextMenuGroupId: "navigation",
            run: () => {
                editor.updateOptions({ fontSize: 14 });
            },
        });

        editor.addAction({
            id: "Toggle-Word-Wrap",
            label: "Toggle Word Wrap",
            contextMenuGroupId: "navigation",
            run: () => {
                editor.updateOptions({ wordWrap: editor.getOption(monaco.editor.EditorOption.wordWrap) === "on" ? "off" : "on" });
            },
        });

        editor.addAction({
            id: "Toggle-Indent-Guides",
            label: "Toggle Indent Guides",
            contextMenuGroupId: "navigation",
            run: () => {
                editor.updateOptions({ renderIndentGuides: !editor.getOption(monaco.editor.EditorOption.renderIndentGuides) });
            },
        });

        editor.addAction({
            id: "Add-function-docs",
            label: "Adds documentation to your current function",
            contextMenuGroupId: "navigation",
            run: () => {
                const functionName = prompt("Function Name");
                if (!functionName) return;

                const functionDescription = prompt("Function Description");
                if (!functionDescription) return;

                const functionParams = prompt("Function Parameters (comma separated)");
                if (!functionParams) return;

                const functionReturns = prompt("Function Returns");
                if (!functionReturns) return;

                const functionExample = prompt("Function Example");
                if (!functionExample) return;

                const functionDocs = `/** ${functionDescription}\n * @param {${functionParams}}\n * @returns {${functionReturns}}\n * @example ${functionExample}\n */\n`;
            },
        });

        var diffEditor = monaco.editor.createDiffEditor(diffNode, {
            // You can optionally disable the resizing
            enableSplitViewResizing: false,
            theme,

            // Render the diff inline
            renderSideBySide: false,
            automaticLayout: true,
        });

        editor.addAction({
            id: "diff-version",
            label: "Diff Version",
            contextMenuGroupId: "navigation",
            run: () => {
                editorNode.style.visibility = "hidden";
                diffNode.style.visibility = "unset";
                diffEditor.setModel({
                    original: editor.getModel(),
                    modified: diffModel,
                });
            },
        });

        diffEditor.addAction({
            id: "exit-diff",
            label: "Exit Version Diff",
            contextMenuGroupId: "navigation",
            run: () => {
                editorNode.style.visibility = "unset";
                diffNode.style.visibility = "hidden";
                diffModel.setValue("empty");
            },
        });

        window.cdoMonaco = { editor, diffEditor };

        const diffModel = monaco.editor.createModel(
            "//empty for now",
            "javascript"
        );

        const sources = {};

        setInterval(() => {
            const a = Array.from(document.querySelectorAll(".btn-info"));
            for (const btn of a) {
                if (!btn.monacoRecognized) {
                    btn.monacoRecognized = true;
                    const b = document.createElement("button");
                    b.type = "button";
                    b.innerHTML = `<i class="fa fa-code"></i>`;
                    const url = new URL(
                        btn.parentElement.href
                    );
                    const version = url.searchParams.get("version");
                    if (!sources[version]) {
                        sources[version] = "";
                        const sourceUrl = new URL(
                            `https://studio.code.org/v3/sources/${appOptions.channel}/main.json`
                        );
                        sourceUrl.searchParams.set("version", version);
                        fetch(sourceUrl.href)
                            .then((e) => e.json())
                            .then((e) => {
                                sources[version] = e.source;
                                diffModel.setValue(sources[version]);
                                btn.parentElement.parentElement.insertBefore(b, btn.parentElement);
                            });
                    }
                    btn.parentElement.parentElement.insertBefore(b, btn.parentElement);
                    b.onclick = () => {
                        diffNode.style.visibility = "unset";

                        editorNode.style.visibility = "hidden";

                        let tsSource = getTsSource(sources[version]);
                        if (tsSource && isTypescript.get()) {
                            console.log("is ts");
                            diffModel.setValue(tsSource);
                            monaco.editor.setModelLanguage(
                                diffModel,
                                "typescript"
                            );
                            diffEditor.setModel({
                                original: diffModel,
                                modified: tsModel,
                            });
                        } else {
                            diffModel.setValue(sources[version]);

                            if (isTypescript.get()) {
                                diffModel.setValue(
                                    "// Your current version is in typescript while your older version is in javascript. There is a conflict and reverting changes will not modify your ts file.\n" +
                                    diffModel.getValue()
                                );
                            }
                            monaco.editor.setModelLanguage(
                                diffModel,
                                "javascript"
                            );
                            diffEditor.setModel({
                                original: diffModel,
                                modified: jsModel,
                            });
                        }

                        btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
                            .querySelector("#x-close")
                            .click();
                    };

                    btn.parentElement.width = 350;
                }
            }
        }, 3000);
    }
    Promise.all([prepareEditor(), importTypes(), loadTS()]).then(
        ([_, types]) => {
            function modifyDefaults(defaults) {
                defaults.setCompilerOptions({
                    ...defaults.getCompilerOptions(),
                    lib: ["esnext"],
                });

                for (const typepath in types) {
                    defaults.addExtraLib(types[typepath], typepath);
                }

                defaults.addExtraLib(`
          declare namespace console {
              export function log(msg: string): void
          }
          declare function setKeyValue(key: string, value: recordTerm, callback?: (result: storageValue) => void): void;

          declare function getKeyValue(key: string, callback?: (result: storageValue) => void): void;
          declare function stopSound(sound: string, callback?: ()=>void): void;
          declare function playSound(sound: string, loop?: boolean, callback?: ()=>void): void;
        `);
            }
            modifyDefaults(monaco.languages.typescript.javascriptDefaults);
            modifyDefaults(monaco.languages.typescript.typescriptDefaults);

            const tsDefaults = monaco.languages.typescript.typescriptDefaults;
            tsDefaults.setCompilerOptions({ ...tsDefaults.getCompilerOptions(), jsx: "react" })
            const intervalid = setInterval(function () {
                if (document.querySelector(".ace_editor")) {
                    loadEditor();
                    clearInterval(intervalid);
                }
            }, 1000);
        }
    );
}

window.addEventListener("load", load);
window.onLoad(load());