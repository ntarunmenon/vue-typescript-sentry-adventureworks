<template>
  <div class="home">
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      items: [
        { productNumber: 40, productName: 'Dickerson', standardCost: '10.00', listPrice: '20.00' },
        { productNumber: 21, productName: 'Larsen', standardCost: '10.00', listPrice: '20.00' },
        { productNumber: 89, productName: 'Geneva', standardCost: '10.00' ,  listPrice: '20.00' },
        { productNumber: 38, productName: 'Jami', standardCost: '10.00' ,  listPrice: '20.00' }
      ]
    }
  }
}
</script>
