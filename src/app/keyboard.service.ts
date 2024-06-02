import { Injectable } from '@angular/core';
import { Keyboard } from './Models/keyboard';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  keyboardArr: Keyboard [] = [

    {
      id: 1,
      name: "Mechanical Gaming Keyboard",
      brand: "Logitech",
      price: 129.99,
      switchType: "Cherry MX Red",
      layout: "ANSI",
      backlight: "RGB",
      wireless: false,
      available: true
    },
    {
      id: 2,
      name: "Compact Mechanical Keyboard",
      brand: "Razer",
      price: 89.99,
      switchType: "Razer Green",
      layout: "ANSI",
      backlight: "RGB",
      wireless: false,
      available: true
    },
    {
      id: 3,
      name: "Wireless Mechanical Keyboard",
      brand: "Corsair",
      price: 159.99,
      switchType: "Cherry MX Brown",
      layout: "ISO",
      backlight: "White",
      wireless: true,
      available: false
    },
    {
      id: 4,
      name: "Silent Mechanical Keyboard",
      brand: "SteelSeries",
      price: 109.99,
      switchType: "Cherry MX Silent",
      layout: "ANSI",
      backlight: "Red",
      wireless: false,
      available: true
    },
    {
      id: 5,
      name: "RGB Gaming Keyboard",
      brand: "HyperX",
      price: 119.99,
      switchType: "HyperX Red",
      layout: "ANSI",
      backlight: "RGB",
      wireless: false,
      available: true
    },
    {
      id: 6,
      name: "Ergonomic Mechanical Keyboard",
      brand: "Microsoft",
      price: 139.99,
      switchType: "Cherry MX Blue",
      layout: "ISO",
      backlight: "None",
      wireless: true,
      available: false
    },
    {
      id: 7,
      name: "Portable Mechanical Keyboard",
      brand: "Anne Pro",
      price: 99.99,
      switchType: "Gateron Brown",
      layout: "ANSI",
      backlight: "RGB",
      wireless: true,
      available: true
    },
    {
      id: 8,
      name: "Minimalist Mechanical Keyboard",
      brand: "Keychron",
      price: 79.99,
      switchType: "Gateron Red",
      layout: "ISO",
      backlight: "White",
      wireless: false,
      available: true
    },
    {
      id: 9,
      name: "Durable Mechanical Keyboard",
      brand: "Ducky",
      price: 149.99,
      switchType: "Cherry MX Black",
      layout: "ANSI",
      backlight: "RGB",
      wireless: false,
      available: false
    },
    {
      id: 10,
      name: "Silent Wireless Mechanical Keyboard",
      brand: "Filco",
      price: 169.99,
      switchType: "Cherry MX Silent Red",
      layout: "ISO",
      backlight: "None",
      wireless: true,
      available: true
    }

    ];

  constructor() { }
}
