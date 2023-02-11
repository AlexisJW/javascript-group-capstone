/**
 * @jest-environment jsdom
 */

describe('totals', () => {
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

  // Test that the number of comments is correct
  it('should return 2', () => {
    document.body.innerHTML = `
     <div id="events">
       <div id="event">
         <div class="comments">
           <div class="comment"></div>
           <div class="comment"></div>
         </div>
       </div>
     </div>
   `;
    const comments = document.querySelectorAll('.comment');
    expect(comments.length).toBe(2);
  });
});
