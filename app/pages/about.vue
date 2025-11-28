<template>
  <UContainer>
    <UButton icon="i-heroicons-check">提交</UButton>
    <UButton icon="i-heroicons-trash">删除</UButton>
    <UModal>
      <UButton label="Open" color="neutral" variant="subtle" />

      <template #content>
        <Placeholder class="h-48 m-4" />
      </template>
    </UModal>
    <UButton
      label="Show toast"
      color="neutral"
      variant="outline"
      @click="showToast"
    />
    <span class="text-primary">Primary</span>
    <span class="text-secondary">Secondary</span>
    <span class="text-success">Success</span>
    <span class="text-info">Info</span>
    <span class="text-warning">Warning</span>
    <span class="text-error">Error</span>
  </UContainer>
  <UButton color="primary">Save Changes</UButton>
  <UButton color="secondary">Save Changes</UButton>
  <UButton color="error">Save Changes</UButton>
</template>

<script setup>
const toast = useToast();

function showToast() {
  toast.add({
    title: "Success",
    description: "Operation completed successfully",
    icon: "i-heroicons-information-circle",
    color: "primary",
  });
}
</script>

<style lang="scss" scoped></style>
