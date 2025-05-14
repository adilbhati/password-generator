<template>
  <div class="bg-white shadow-md rounded-xl p-6 sm:p-8 w-full max-w-md mx-auto">
    <div class="mb-3 sm:mb-4">
      <label for="length" class="block text-gray-700 text-sm font-medium mb-1">Password Length:</label>
      <div class="flex rounded-md shadow-sm">
        <input type="number" id="length" v-model="passwordLength" min="8" max="128" placeholder="Enter length (8-128)"
          class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4" />
        <span
          class="inline-flex items-center px-3 rounded-r-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
          chars
        </span>
      </div>
    </div>

    <div class="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
      <div class="flex items-center">
        <input id="lowercase" v-model="options.lower" type="checkbox"
          class="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-green-500" />
        <label for="lowercase" class="ml-2 text-sm text-gray-700">Include Lowercase</label>
      </div>
      <div class="flex items-center">
        <input id="uppercase" v-model="options.upper" type="checkbox"
          class="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-green-500" />
        <label for="uppercase" class="ml-2 text-sm text-gray-700">Include Uppercase</label>
      </div>
      <div class="flex items-center">
        <input id="digits" v-model="options.digits" type="checkbox"
          class="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-green-500" />
        <label for="digits" class="ml-2 text-sm text-gray-700">Include Digits</label>
      </div>
      <div class="flex items-center">
        <input id="symbols" v-model="options.symbols" type="checkbox"
          class="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-green-500" />
        <label for="symbols" class="ml-2 text-sm text-gray-700">Include Symbols</label>
      </div>
    </div>

    <button @click="generatePassword"
      class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
      Generate Password
    </button>

    <div v-if="generatedPassword" class="mt-4 sm:mt-6 rounded-md shadow-sm">
      <div class="flex items-center border border-gray-300 rounded-md">
        <input type="text" :value="generatedPassword" readonly placeholder="Generated Password"
          class="flex-grow block w-full min-w-0 py-2 px-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 rounded-l-md sm:text-sm" />
        <button @click="copyPassword"
          class="inline-flex items-center px-3 py-2 border-l border-gray-300 bg-gray-100 text-gray-700 text-sm font-medium rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m-2 10v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m-2 10h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
          </svg>
          Copy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { generatePassword as generatePasswordUtil } from '../utils/passwordGenerator';

export default {
  setup() {
    const passwordLength = ref(12);
    const options = ref({
      lower: true,
      upper: true,
      digits: true,
      symbols: true
    });
    const generatedPassword = ref("");

    const handleGeneratePassword = () => {
      generatedPassword.value = generatePasswordUtil(passwordLength.value, options.value);
    };

    const copyPassword = () => {
      navigator.clipboard.writeText(generatedPassword.value);
    };

    return {
      passwordLength,
      options,
      generatedPassword,
      generatePassword: handleGeneratePassword,
      copyPassword
    };
  }
};

</script>

<style scoped>
/* We can remove most of this as Tailwind handles the styling */
</style>