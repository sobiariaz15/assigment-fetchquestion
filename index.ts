function fetchquestion(): Promise<string> {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const question = "Which company developed typescript?";
        resolve(question);
      }, 1000); 
    });
  }
  
  function displayQuestion(): Promise<void> {
    return new Promise(async (resolve) => {
      try {
        const question = await fetchquestion();
        console.log(question);
        resolve();
      } catch (error) {
        console.error("Error fetching question:", error);
        resolve(); 
      }
    });
  }
  
  
  displayQuestion().then(() => {
    console.log("Question displayed!");
  });