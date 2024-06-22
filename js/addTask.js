document.addEventListener("DOMContentLoaded", () => {

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskData = {
      createdAt: `${year}-${month}-${day}`,
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value
    };

    const result = taskManager.saveTask(taskData);

    if (result.success) {
      return window.location.href = '../tasks.html';
    } else {
      console.log("Failed to save task");
    }

    console.log("Form Submitted Successfully", taskData);
  });

      const getUsername = taskManager.getUsername();
      console.log(getUsername);
      user = document.getElementById("usernameLoggedIn");
      user.innerHTML = `${getUsername}`;
});
