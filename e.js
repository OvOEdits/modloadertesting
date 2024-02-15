if (event.code === "KeyQ") {
      ovoTasTools.timescale = 1
        notify("timescale set to 1");
    }
    if (event.code === "KeyW") {
      ovoTasTools.timescale = 0.5
        notify("timescale set to 0.5");
    }
    if (event.code === "KeyE") {
      ovoTasTools.timescale = 0.02
        notify("timescale set to 0.02");
    }
    if (event.code === "KeyA") {
      ovoTasTools.timescale = 0.2
      notify("timescale set to 0.2");
    }
    if (event.code === "KeyD") {
      if (event.shiftKey) {
        ovoTasTools.timescale = 0.07
        notify("timescale set to 0.07");
      } else {        
        ovoTasTools.timescale = 0.05
        notify("timescale set to 0.05");
      }
    }
    if (event.code === "KeyS") {
      ovoTasTools.timescale = 0.1
        notify("timescale set to 0.1");
    }
    if (event.code === "KeyX") {
      ovoTasTools.timescale *= 2
      notify("timescale set to *2");
    }
    if (event.code === "KeyZ") {
      ovoTasTools.timescale *= 5
      notify("timescale set to *5");
    }
    if (event.code === "KeyC") {
      ovoTasTools.timescale /= 2
      notify("timescale set to /2");
    }
    if (event.code === "KeyV") {
      ovoTasTools.timescale /= 5
      notify("timescale set to /5");
    }
    if(event.code === "KeyF") {
      if (event.shiftKey) {
          ovoTasTools.loadInputs([["Down"],])
          ovoTasTools.playInputs()
          notify("auto mj inputed");
      } else {
          ovoTasTools.loadInputs([["Jump"],["Jump"],["Jump"],["Jump"],["Jump"],])
          ovoTasTools.playInputs()
          notify("auto jump inputed");
      }
    }
