(() => {
    let vue_vm = new Vue({
        // link Vue to an element in out HTML
        // el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "This is some sample text",

            collection: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "Jhon", role: "prof", nickname: "super chill"},
                { name: "Joe", role: "prof", nickname: "Teddy Bear"}
            ]
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickHeader(){
                console.log("clicked on the header");
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML, same as el
})();