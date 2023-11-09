const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            goals: [],
            display: true,
            showOrHide: 'Hide'

        };
    },
    computed: {
        toggleButton() {
            return this.display ? 'Hide List' : 'Show list';
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.userInput);
            this.userInput = '';
        },
        toggleText() {
        this.display = !this.display;

        },
        removeGoal(idx){
            this.goals.splice(idx, 1);
        }
    }

});
app.mount('#assignment')