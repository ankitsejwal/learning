// implementing stop watch object

function StopWatch(){
    // duration, reset(), start(), stop()
    let running = false;
    let startTime, endTime;
    this.duration = 0;

    this.start = function(){
        // start function()
        if (!running){
            startTime = new Date();
            running = true;
        }
        else{
            console.log("The stopwatch is already running.");
        }
    }

    this.stop = function(){
        // stop function()
        if (running){
            endTime = new Date();
            const seconds =  (endTime.getTime() - startTime.getTime()) / 1000;
            this.duration += seconds;
            running = false;
        }
        else{
            console.log("The stopwatch is already stopped.");
        }
    }
    
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        this.duration = 0;
    }
}

const sw = new StopWatch();
