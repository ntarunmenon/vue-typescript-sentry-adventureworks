<template>
  <div class="home">
      <b-container>
          <b-row>
            <b-col>
              <b-table striped hover :items="items"></b-table>
            </b-col>
          </b-row>
      </b-container>

  </div>
</template>

<script lang = "ts">
import Vue from 'vue'
import { Product }  from '../models/Product'
import {Component} from "vue-property-decorator";

@Component()
export default class Home extends Vue {
    items: Product[] = [
        {productNumber: 40, productName: 'Dickerson', standardCost: '10.00', listPrice: '20.00'},
        {productNumber: 21, productName: 'Larsen', standardCost: '10.00', listPrice: '20.00'},
        {productNumber: 89, productName: 'Geneva', standardCost: '10.00', listPrice: '20.00'},
        {productNumber: 38, productName: 'Jami', standardCost: '10.00', listPrice: '20.00'}
    ]
}

</script>
