<template>
    <div class="container">
        <!-- test
        {{ firstName.split('').reverse().join('') }}

        <a v-bind:[attributeName]="url"> ... </a>

        <p v-if="isButtonDisabled">Now you see me v-if</p>
        <p v-else-if="!isButtonDisabled">Now you dont see me v-if</p>

        <p v-show="isButtonDisabled">Now you see me v-show</p>

        <button v-bind:disabled="isButtonDisabled">Button</button>
        <a  :[Maha]="url" target="_blank">Link</a>
        <button  @[eventName]="doSomething()">Do Something</button> -->

        <!-- <ul>
            <li v-for="(food, index) in foods">{{ index }} => {{ food }}</li>
        </ul>
        <ul>
            <li v-for="(el, index) in marks">{{ index }} => {{ el.studentName }} : {{ el.studentMark }}</li>
        </ul> -->

        <!-- <input type="text" v-model="firstName">
        <p>{{ firstName }}</p> -->

        <!-- <p>{{ counter }}</p>
        <button @click="counter++">Increase Counter</button> -->

        <!-- <p v-text="html"></p>
        <p v-html="html"></p> -->

        <!-- <p>{{ firstName }}</p>
        <p>{{ nameReversed() }}</p>
        <p>{{ nameReversed2 }}</p> -->


        <!-- <p>{{ fullName }}</p>
        <p>{{ firstName }}</p>
        <p>{{ lastName }}</p>
        <button @click="fullName = 'Gaith Khoury'">Change</button> -->

        <!-- <div v-bind:class="{ active: isActive }">HI</div> -->

        <!-- <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">hi</div> -->

        <!-- <div :style="styleObject">Hi Bitch</div> -->

        <!-- <ul v-for="set in sets">
            <li v-for="ele in even(set)">{{ ele }}</li>
        </ul> -->

        <!-- <div>
            <span v-for="n in 9">{{ n + " " }}</span>
        </div> -->

        <!-- <input type="text" v-model.trim="test">
        <button @click="say(test)">Say {{ test }}</button> -->

        <!-- <input type="text" @keyup.alt.67="say('hi')" > -->


        <!-- <div>
            <label for="one">Search for the language you want : </label>
            <input id="one" type="text" v-model="wantedLang">
        </div>
        <ul>
            <li v-for="lang in filteredLangs">{{ lang }}</li>
        </ul> -->

    </div>
</template>


<script>

export default {
    data() {
        return {
            wantedLang: '',
            langs: ["HTML", "CSS", "JavaScript", "Java", "C++", "Roby", "Python", "Sass", "Bootstrap", "Pascal"],
            test: "",
            sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],
            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            styleObject: {
                color: 'red',
                fontSize: '40px'
            },
            isActive: true,
            hasError: true,
            counter: 0,
            form: {
                email: '',
                name: '',
                food: null,
                checked: [],
            },
            foods: ['Carrots', 'Beans', 'Tomatoes', 'Corn'],
            marks: [
                {
                    studentName: "Hani",
                    studentMark: "80%",
                },
                {
                    studentName: "Karen",
                    studentMark: "90%",
                },
                {
                    studentName: "Maha",
                    studentMark: "85%",
                },
            ],
            html: "<h1>Hani</h1>",
            show: true,
            firstName: 'Hani',
            lastName: "Salloum",
            dynamicId: 14,
            isButtonDisabled: false,
            attributeName: 'href',
            url: 'https://v2.vuejs.org/v2/guide/syntax',
            Maha: 'href',
            eventName: 'mouseover'
        }
    },

    // eslint-disable-next-line vue/component-api-style
    methods: {
        say(msg) {
            alert(msg);
        },
        doSomething() {

            console.log('jjfjj')
        },
        nameReversed() {
            return this.firstName.split("").reverse().join("");
        },
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    computed: {
        nameReversed2: function () {
            return this.firstName.split("").reverse().join("");
        },
        fullName: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        },
        filteredLangs: function() {
            let x = new RegExp(this.wantedLang, 'i');
            return this.langs.filter(lang => lang.match(x));
        }
    }
}
</script>


<!-- <template>
    <div class="container">
        <b-form-input></b-form-input>
    </div>
</template>
  
<script>
import {BFormInput,} from 'bootstrap-vue'

export default {
    components: {
        BFormInput
    },
    data() {
        return {
            form: {
                email: '',
                name: '',
                food: null,
                checked: []
            },
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script> -->