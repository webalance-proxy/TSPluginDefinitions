/**
 * Module.exports needs to be an object with this interface
 */
export interface Plugin {
    /**
     * Called on startup to pass a config object to the plugin
     * @param config The configuration object
     */
    loadConfig:(config: any)=>void;

    /**
     * Called on startup to pass a save hook, to allow a plugin to save config data
     * @param {(config: any) => void} data The callback hook
     */
    registerSaveHook:(data:(config:any)=>void)=>void;

    /**
     * If defined, allows for a dedicated page on the administration site to configure selected options
     */
    webInterface?:{
        /**
         * The name to display on the link
         */
        name: string;
        /**
         * The configuration blocks
         */
        blocks: Array<{
            /**
             * The id of the input
             */
            keyName: string,
            /**
             * The name of the input
             */
            name: string,
            /**
             * The help text of the input
             */
            helpText: string,
            /**
             * The type of input
             */
            type: WebInterface_BlockTypes

        }>

    }


}


export enum WebInterface_BlockTypes {
    /**
     * A standard text input
     */
    TEXT,
    /**
     * A textarea
     */
    TEXTAREA,
    /**
     * A dropdown select
     */
    SELECT,
    /**
     * A text field with a number constraint
     */
    NUMBER,
    /**
     * A standard checkbox
     */
    CHECKBOX,
    /**
     * A stylish switch
     */
    SWITCH,
    /**
     * A password entry
     */
    PASSWORD
}
