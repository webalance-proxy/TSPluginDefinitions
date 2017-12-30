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
     * If defined, allows for a dedicated page on the administration site to configure selected options
     */
    webInterface?:WebInterface



}

declare global {
    /**
     * Function to call when you need to save config data
     * @param data
     */
    function saveHook(data:any):void;
}

/**
 * The setup for the administration page
 */
export interface WebInterface {
    /**
     * The name to display on the link
     */
    name: string;

    /**
     * Returns the values to fill in the webform when displayed
     * @returns {{[p: string]: any}} A key-value pair of fields and their values, based on the keyName in blocks
     */
    getValues?:()=>{
        [key: string]: any
    }

    /**
     * Called when updated values are saved in the web interface
     * @param {{} | any} valueMap The new values object
     * @param (error: string)=>void cb Use to report an error setting values
     */
    setValues?:(valueMap: {} | any, cb:(error: string)=>void)=>void;

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

        /**
         * If the type is a select, the options
         */
        select?: SelectOptions

    }>
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

export interface SelectOptions {
    /**
     * Allow multiple selections
     */
    multi: boolean;
    /**
     * The values to display
     * Use objects to specify groups, and array for values
     */
    items: Select_Group | Select_Entries
}

export interface Select_Group {
    [key: string]: Select_Group | Select_Entries
}
export interface Select_Entries extends Array<Select_Entry>{};
export interface Select_Entry {
    /**
     * The text to display
     */
    name: string,
    /**
     * The option value
     */
    value: string
}
