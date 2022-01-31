var tasks = ["unlock module at 8pm", "watch all the videos in the module", "taking notes while watching videos", "after finishing the module, practice the module by myself", "if anything is not clear ask in the group for the help"];

var totalTasks = tasks.length;

i = 0;

while (i <= totalTasks){
     if (i == 1){
    console.log("your first task is to " + tasks[i - 1]);
    i += 1;
        if (i == 2){
            console.log("your second task is to " + tasks[i - 1]);
            i += 1;
            if (i == 3){
                console.log("your next job is to " + tasks[i - 1]);
                i += 1;
                if (i == 4){
                    console.log("This is really important job for you " + tasks[i - 1]);
                    i += 1;
                    if (i == 5){
                        console.log("Your last but not least job is - " + tasks[i - 1]);
                    }
                }
            }

        }
     }
i += 1;
}