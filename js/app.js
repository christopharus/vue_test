//Create the first instance of vue 
var vm = new Vue({
    el: '#app', // vue instance to call in html

    
    data: { // state or global data to manage in vue 
        actions: ["Prier", "Nettoyer", "Balayer", "Preparer"],
        act: "",
        pos: null
    },
    methods: { //Functions that work in vue
        /* Adding an element in the array actions */
        addaction() {
            this.actions.push(this.act);
        },
        /*Remove element in the array according to their position*/
        remove_action() {
            this.actions.splice(this.pos - 1, 1);
        }
    },
    /*Trying the understand the life cycle of vue */
    created() {
        console.log("L'affaire est en creation");
    },
    mounted() {
        console.log("Salut les enfants");
    }
})