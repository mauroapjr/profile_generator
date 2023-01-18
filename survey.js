const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable :)  ",
  (answer) => {
    console.log(`Thank you for your answer ${answer}!`);
    rl.question("What's an activity you like doing?  ", (answer) => {
      console.log(`${answer}! I would never imagine that.`);
      rl.question("What do you listen to while doing that?  ", (answer) => {
        console.log(`${answer}. That is a good answer!`);
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.)  ",
          (answer) => {
            console.log(`${answer}! I like that too!`);
            rl.question(
              "What's your favourite thing to eat for that meal?  ",
              (answer) => {
                console.log(
                  `Can't believe you like ${answer}. I like that too!`
                );
                rl.question(
                  "Which sport is your absolute favourite?  ",
                  (answer) => {
                    console.log(
                      `I'm not a big fun of ${answer}, but I get it.`
                    );
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at!  ",
                      (answer) => {
                        console.log(
                          `${answer}! Wow! That's impressive! Thank you for you participation.`
                        );
                        rl.close();
                      }
                    );
                  }
                );
              }
            );
          }
        );
      });
    });
  }
);
