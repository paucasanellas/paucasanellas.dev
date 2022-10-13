import { Component } from 'vue'
export interface Route {
  path: string,
  name: string,
  title: string,
  component: Component,
}
