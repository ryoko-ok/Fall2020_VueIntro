(() => {
    let vue_vm = new Vue({
        // link Vue to an element in out HTML
        // el: "#app", --- same with last line $mount("#app")

        data: {
            message: "Hello from Vue!",
            anotherMessage: "This is some sample text",

            professors: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "Jhon", role: "prof", nickname: "super chill"},
                { name: "Joe", role: "prof", nickname: "Teddy Bear"}
            ]
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app"div on the page
        mounted: function() {
            console.log("Vue is mounted!")
            // alert("Hey there! your vue instance is ready");  -- pop up alert

            this.professors.push({name: "Jarrod", role: "supermodel prof", nickname: "Zoolander"})
            // alert("you added Jarrod!")
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