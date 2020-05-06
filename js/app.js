var app = new Vue({
    el: '#app',
    data: {
        actions: ["Prier", "Nettoyer", "Balayer", "Preparer"],
        act: "",
        pos: null
    },
    methods: {
        addaction() {
            this.actions.push(this.act);
        },
        remove_action() {
            this.actions.splice(this.pos - 1, 1);
        }
    },
    created() {
        console.log("L'affaire est en creation");
    },
    mounted() {
        console.log("Salut les enfants");
    }
})