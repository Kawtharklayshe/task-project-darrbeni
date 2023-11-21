<script>
import {
  BAvatar,
  BBadge,
  BButton,
  BCard,
  BCol,
  BDropdown,
  BDropdownItem,
  BFormGroup,
  BFormInput,
 
} from 'bootstrap-vue'

export default {
  components: {

  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      firstName:'kawthar',
      dynamicId:14,
      isButtonDisabled:false,
      attributeName:'href',
      url:'https://v2.vuejs.org/v2/guide/syntax'
    }
  },
  
  // eslint-disable-next-line vue/component-api-style
  methods: {
    doSomething(){

      console.log('jjfjj')
    },
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
    },
  },
}
</script>

<template>
  <div class="container">

    d
    <!-- test
  {{ firstName }} -->


  <!-- <BFormInput
          id="input-1"
          v-model="firstName"
          type="text"
          placeholder="Enter name"
          required
        />
<input/> -->

    <!-- <a v-on:click="doSomething"> click me </a> -->
<!-- <a v-bind:[attributeName]="url"> ... </a>

   <p v-if="isButtonDisabled">Now you see me v-if</p>
    
   <p v-show="isButtonDisabled">Now you see me v-show</p>
    
    {{ isButtonDisabled ? 'YES isButtonDisabled' : 'NO isButtonDisabled' }}
    <button :disabled="isButtonDisabled">Button</button> -->
    <!-- <BForm
      v-if="show"
      @submit="onSubmit"
      @reset="onReset"
    >
      <BFormGroup
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <BFormInput
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        />
      </BFormGroup>

      <BFormGroup
        id="input-group-2"
        label="Your Name:"
        label-for="input-2"
      >
        <BFormInput
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        />
      </BFormGroup>

      <BFormGroup
        id="input-group-3"
        label="Food:"
        label-for="input-3"
      >
        <BFormSelect
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        />
      </BFormGroup>

      <BFormGroup
        id="input-group-4"
        v-slot="{ ariaDescribedby }"
      >
        <BFormCheckboxGroup
          id="checkboxes-4"
          v-model="form.checked"
          :aria-describedby="ariaDescribedby"
        >
          <BFormCheckbox value="me">
            Check me out
          </BFormCheckbox>
          <BFormCheckbox value="that">
            Check that out
          </BFormCheckbox>
        </BFormCheckboxGroup>
      </BFormGroup>

      <BButton
        type="submit"
        variant="primary"
      >
        Submit
      </BButton>
      <BButton
        type="reset"
        variant="danger"
      >
        Reset
      </BButton>
    </BForm>
    <BCard
      class="mt-3"
      header="Form Data Result"
    >
      <pre class="m-0">{{ form }}</pre>
    </BCard> -->
  </div>
</template>
