const todoList = []

window.setTimeout(function () {

  const input = prompt('What would you like to do?').trim();

  while (input !== 'quit' && input !== 'q') {
    if (input === 'new') {
      input = prompt('Enter new Todo');
      todoList.push(input);
      console.log(`${input} added to list`);
    }
    else if (input === 'list') {
      console.log('***********')
      for (let i = 0; i < todoList.length; i++) {
        console.log(`${i}: ${todoList[i]}`)
      }
      console.log('***********')
    }
    else if (input === 'delete') {
      input = parseInt(prompt('Enter the index of the todo to delete'));
      if (input > todoList.length || input < 0 || isNaN(input)) {
        alert('Invalid index number. Aborting delete');
      }
      else {
        todoList.splice(input, 1);
        console.log(`Todo ${input} removed`)
      }
    }
    else {
      input = alert('Command not recognized.');
    }
    input = prompt('What would you like to do now?').trim();

  }

  console.log('You quit the app')
}, 500);