import { Component } from 'vue'
export interface Route {
  path: string,
  name: string,
  title: string,
  icon?: string,
  component?: Component,
}
