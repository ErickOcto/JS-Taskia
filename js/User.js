class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  getUsername() {
    return JSON.parse(localStorage.getItem("username")) || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    const userCheck = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (userCheck) {
      return {
        success: true,
        username,
      };
    } else {
      return {
        success: false,
        message: "Data not found",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}