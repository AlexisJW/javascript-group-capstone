/**
 * @jest-environment jsdom
 */

import itemsCounter from './itemsCounter.js';

describe('counters', () => {
  it('should add two elements', () => {
    document.body.innerHTML = `
     <div class="shadow-card"></div>
   `;
    const events = document.querySelector('.shadow-card');
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    element1.id = 'element-1';
    element2.id = 'element-2';
    events.appendChild(element1);
    events.appendChild(element2);
    expect(events.children.length).toBe(2);
  });

  // Test that the number of items is correct
  it('should return 2', () => {
    document.body.innerHTML = `
     <div id="cards-container"></div>
   `;
    const events = document.querySelector('#cards-container');
    events.innerHTML = '';
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    element1.className = 'shadow-card';
    element2.className = 'shadow-card';
    events.appendChild(element1);
    events.appendChild(element2);
    expect(itemsCounter()).toBe(2);
  });
});