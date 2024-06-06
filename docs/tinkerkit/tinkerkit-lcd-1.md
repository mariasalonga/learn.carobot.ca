---
title: Windows Installation Guide
sidebar_position: 2
slug: tinkerkit-lcd-tutorial-01-windows-installation-guide
---

# TinkerKit Arduino LCD - Installation Guide
 
**In order to use your LCD module with Windows, you have to install the driver for it. You can [download the driver from our TinkerKit LCD product page](https://www.canadarobotix.com/products/1654).**

## Install Software and Library, Download Driver

1. Install the [Arduino Software](https://www.arduino.cc/en/Main/Software) and the [TKLCD library](https://github.com/carobot/TKLCD-Library), following the guide on the dedicated page.
2. [Download the driver from our TinkerKit LCD product page](https://www.canadarobotix.com/products/1654) or [from here](https://github.com/carobot/tinkerkit_core/raw/master/TKLCD_drivers.zip)
3. Once uncompressed, you should have a Tinkerkit Drivers folder.
4. Locate the Arduino folder (where your Arduino software is installed). If you are not sure, find the Arduino icon, right click, properties then click on the “Open file location” button, it will open your Arduino software folder.
5. Locate the drivers subfolder
6. Now move the content of the downloaded “Tinkerkit Drivers” folder inside the Arduino drivers subfolder. At this point it’s important to know that the TinkerKit! (and also the Arduino) boards works in this way: they have two “states”. One is called “bootloader state” that lasts for about seven seconds after you plug the board into the usb port, then it goes into “sketch mode”. Every time you power the board (or reset it) it goes into bootloader mode, then sketchbook mode after seven seconds. We have to install a driver for each mode.

## Install Driver

7. Plug the TinkerKit LCD in the USB port using a micro-USB cable.
8. Open Control Panel from the Start menu, click on System and Security, then on System. On the left sidebar you should have the “Device Manager” link, click on it. This opens the device manager (If you can’t find it you can always type “devmgmt.msc” in Start->Run).
9. Under “Ports” you should have the “Arduino Leonardo”
    - (only if you have already used an Arduino Leonardo) Right-click on it then press “Uninstall“.
    - pop-up window appears, check the “Delete the driver software for this device” option and press OK.
10. Press the reset button on the TKLCD board, without closing the Device Manager. Once restarted, for the first 7 seconds, while it’s in bootloader mode, you should see an unknown “Arduino Leonardo” in the device list, right click on it and select “Uninstall“. A pop-up confirmation window appears, press OK. (sometimes Windows shows the “unknown device” at the top of the list and not under the “ports” sub-menu)
11. Now that we have uninstalled the Leonardo drivers for the LCD, we have to install them again. Press reset again on the TKLCD board, and when the unknown “Arduino Leonardo” pops up from the ports menu, right-click then “Update driver software“
12. Choose “Browse my computer for driver software”
13. Click on browse and look for the “drivers” folder inside your Arduino folder, where you pasted the files, then press OK
14. If everything went fine it should say “installation complete”. Don’t leave the device manager, as we also have to install the drivers for the sketch mode.
15. Press the reset button, Windows should see a “TinkerKit LCD bootloader”, then after 8 seconds it turns again into an unknown Arduino Leonardo. Repeat the right click, update driver procedure that we did in steps 12 to 14.
16. Now the LCD is installed on your Windows PC. After installing it, you can select the Arduino Leonardo board from the IDE every time that you want to use the TinkerKit! LCD.
