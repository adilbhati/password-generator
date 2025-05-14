<template>
    <div class="bg-white shadow-md rounded-xl p-6 sm:p-8 w-full max-w-md mx-auto space-y-4">
      
      <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4"
            />

  
      <div class="space-y-1">
        <!-- Progress Bar -->
        <div class="bg-gray-200 rounded-full h-2.5" v-if="password">
          <div
            class="h-2.5 rounded-full"
            :class="progressBarColor"
            :style="{ width: strengthPercentage + '%' }"
          ></div>
        </div>
        
        <!-- Strength Text -->
        <p class="text-sm text-gray-700" :class="strengthTextClass">
          {{ strengthText }}
        </p>
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const password = ref('');
  
      const strength = computed(() => {
        if (!password.value) return 0;
  
        let strength = 0;
        if (password.value.length >= 8) strength += 20;
        if (password.value.match(/[a-z]/)) strength += 20;
        if (password.value.match(/[A-Z]/)) strength += 20;
        if (password.value.match(/[0-9]/)) strength += 20;
        if (password.value.match(/[^a-zA-Z0-9]/)) strength += 20;
  
        return Math.min(strength, 100);
      });
  
      const strengthPercentage = computed(() => {
          return strength.value
      })
  
      const strengthText = computed(() => {
        if (!password.value) return '';
        if (strength.value < 40) return 'Weak';
        if (strength.value < 60) return 'Moderate';
        if (strength.value < 80) return 'Strong';
        return 'Very Strong';
      });
  
      const strengthTextClass = computed(() => {
        if (!password.value) return '';
        if (strength.value < 40) return 'text-red-500';
        if (strength.value < 60) return 'text-yellow-500';
        if (strength.value < 80) return 'text-green-500';
        return 'text-green-600 font-semibold';
      });
      
      const progressBarColor = computed(() => {
        if (!password.value) return 'bg-gray-200';
        if (strength.value < 40) return 'bg-red-500';
        if (strength.value < 60) return 'bg-yellow-500';
        if (strength.value < 80) return 'bg-green-500';
        return 'bg-green-600';
      });
  
      return {
        password,
        strengthText,
        strengthTextClass,
        strengthPercentage,
        progressBarColor
      };
    },
  };
  </script>
  