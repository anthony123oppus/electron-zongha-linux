import { BrowserWindow, screen } from "electron";
import { ipcMainOn } from "./util.js";

export function ipcWindowControl(mainWindow : BrowserWindow ) {
    ipcMainOn("sendFrameAction", (payload : FrameWindowAction) => {
      const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  
      switch (payload) {
        case "CLOSE":
          mainWindow.close()
          break;
        case "MAXIMIZE":
          if(mainWindow.isFullScreen()) {
            mainWindow.setFullScreen(false);
            mainWindow.setBounds({ 
              width: Math.round(width * 0.6), // 50% of screen width
              height: Math.round(height * 0.8) // 80% of screen height
            });
          }else{
            
            mainWindow.setFullScreen(true);
          }
          break;
        case "MINIMIZE":
          mainWindow.minimize()
          break;
      
        default:
          break;
      }
    })

}
