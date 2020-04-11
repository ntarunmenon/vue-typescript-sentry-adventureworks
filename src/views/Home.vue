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
import ProductService from "@/service/ProductService";

@Component({})
export default class Home extends Vue {
    items: Product[] = []

    private async mounted() {
        this.items = (await ProductService.getAllProducts())
    }
}

</script>
