export default function getCard(id, data) {
    for (let i = 0; i < data.length; i++) {
      const column = data[i];
      const taskList = column.taskList;
      for (let j = 0; j < taskList.length; j++) {
        const task = taskList[j];
        if (task.id === id) {
          return {
            sourceColumnIndex: i,
            sourceTaskIndex: j,
            content: task,
          };
        }
      }
    }
    return null;
  }