<template>
  <Form v-slot="{ values }">
    <Field name="email" type="email" />
    <Field name="password" type="password" />
    <Field name="password" type="submit" />

    <!-- print form values -->
    <pre>{{ values }}</pre>
  </Form>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
function validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }

      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }

      // All is good
      return true;
    }
</script>