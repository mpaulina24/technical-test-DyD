import { ref, computed } from "vue";

export default function usePagination(items, pageSize = 5) {
  const currentPage = ref(1);
  const size = ref(pageSize);

  const totalPages = computed(() =>
    Math.ceil(items.value.length / size.value)
  );

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * size.value;
    return items.value.slice(start, start + size.value);
  });

  function next() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  }

  function prev() {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  }

  function setPageSize(newSize) {
    size.value = newSize;
    currentPage.value = 1;
  }

  return {
    currentPage,
    totalPages,
    paginatedItems,
    next,
    prev,
    size,
    setPageSize,
  };
}
