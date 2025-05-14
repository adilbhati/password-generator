<template>
  <div class="min-h-screen flex items-center justify-center py-6 sm:py-8">
    <!-- Main card container -->
    <div class="bg-gray-100 rounded-xl shadow-lg p-8 w-full max-w-5xl space-y-8">

      <!-- Header Section -->
      <header class="mb-6">
        <p class="text-gray-800 text-lg sm:text-xl leading-relaxed">
          Create strong, secure passwords in seconds! Choose your preferred length and character types to generate a password.
        </p>
      </header>

      <!-- Two components side by side -->
      <div class="flex flex-col md:flex-row gap-6 sm:gap-12">

        <!-- Password Generator Card -->
        <div class="flex-1 bg-green-50 rounded-xl shadow-md p-6">
          <h3 class="text-xl font-semibold text-green-700 mb-4">Generate Secure Password</h3>
          <PasswordGenerator />
        </div>

        <!-- Password Checker Card -->
        <div class="flex-1 bg-green-50 rounded-xl shadow-md p-6">
          <h3 class="text-xl font-semibold text-green-700 mb-4">Password Strength Checker</h3>
          <PasswordChecker />
        </div>

      </div>

      <!-- Why Choose Section -->
      <section class="mt-8">
        <h2 class="text-xl sm:text-2xl font-semibold text-green-700 mb-4">Why Choose This Password Generator?</h2>
        <ul class="list-none pl-0">
          <li class="mb-2 text-gray-700">
            <strong class="font-semibold text-green-600">Customizable:</strong> Choose password length and complexity.
          </li>
          <li class="mb-2 text-gray-700">
            <strong class="font-semibold text-green-600">Secure:</strong> Generate strong passwords for your accounts. 
          </li>
          <li class="text-gray-700">
            <strong class="font-semibold text-green-600">Easy to Use:</strong> Simple, clean interface for quick generation.
          </li>
        </ul>
      </section>
      
    </div>
  </div>
</template>



<script>
// Import the Password Generator component
import PasswordGenerator from './components/PasswordGenerator.vue';
import PasswordChecker from './components/PasswordChecker.vue';

export default {
  components: {
    PasswordGenerator,
    PasswordChecker
  }
};
</script>

<style scoped>
/* We can remove most of this as Tailwind handles the styling */
</style>