(() => {
    let vue_vm = new Vue({
        // link Vue to an element in out HTML
        // el: "#app", --- same with last line $mount("#app")

        data: {
            message: "Hello from Vue!",
            anotherMessage: "This is some sample text",
            removeAformat:true,
            showBioData: false,

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

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickHeader(){
                console.log("clicked on the header");
            },

            removeProf(target) {
                // remove this prof from the proffessors array
                console.log('clicked to remove prof', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                //toggle the propety between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML, same as el
})();