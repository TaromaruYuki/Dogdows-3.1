const dos_name = "DOG DOS";
const cd_rom_prov = "Dog Technology Inc.";
const cd_rom_name = "BONE";
const cd_rom_path = "D"

const ms_name = "Doggosoft";
const ms_srt_name = "DS"

const sm_name = "Dumbdrive";
const sm_name_cap = "DUMBdrive";
const sm_name_srt = "DUMBdrv";

const os_name = "Dogdows";

const action = {
    print: "PRINT",
    pause: "PAUSE",
    clear: "CLEAR",
    scroll: "SCROLL",
    destroy: "DESTROY"
}

function after_destroy() {
    window.location.href = "dogdows_start.html"
}

const startup_dict = [
    { action: action.print, text: `Starting ${dos_name.replace(" ", "-")}...\n\n` },
    { action: action.pause, time: "s", wait_length: 7 },
    { action: action.clear },

    { action: action.print, text: `CD-ROM Device Driver for IDE (Four Channels Supported)\n(C)Copyright ${cd_rom_prov}. 1993-1996\nDriver Version : V340\nDevice Name: ${cd_rom_name}` },
    { action: action.pause, time: "s", wait_length: 5 },
    { action: action.print, text: `\nTransfer Mode  : Programmed I/O\nDrive 0:  Port= 170 (Secondary Channel), Master  IRQ= 15\nFirmware Version   : ` },
    { action: action.pause, time: "s", wait_length: 1 },
    { action: action.clear },
    
    { action: action.print, text: `${sm_name} double buffering manager installed.` },
    { action: action.pause, time: "ms", wait_length: 250 },
    { action: action.print, text: `\nC:\\>C:\\${os_name.toUpperCase()}\\${sm_name.toUpperCase()}.EXE\n${ms_name} ${sm_name_cap} Disk Cache version 4.0\nCopyright 1991,1992 ${ms_name} Corp.
    \n\nCache size: 2,097,152 bytes\nCache size while running ${os_name}: 2,097,152` },
    { action: action.pause, time: "ms", wait_length: 500 }, { action: action.print, text: `\n  Disk Caching Status\ndrive   read cache   write cache   buffering\n
    --------------------------------------------\nA:   yes   no   no\nB:   yes   no   no\nC:   yes   yes  -\n\nFor help, type "${sm_name} /?".` },
    { action: action.scroll },

    { action: action.pause, time: "ms", wait_length: 575 },
    { action: action.print, text: `\n\nThe memory-resident portion of ${sm_name_cap} is loaded.\n${ms_srt_name}CDEX Version 2.23\nCopyright (C) ${ms_name} Corp. 1986-1993. All rights reserved.
    \n Drive ${cd_rom_path}: = Driver ${cd_rom_name} unit 0` },
    { action: action.pause, time: "ms", wait_length: 250 },

    { action: action.print, text: `\nC:\\>` },
    { action: action.pause, time: "s", wait_length: 1 },
    { action: action.print, text: "d" },
    { action: action.pause, time: "ms", wait_length: 250 },
    { action: action.print, text: "o" },
    { action: action.pause, time: "ms", wait_length: 150 },
    { action: action.print, text: "g" },
    { action: action.pause, time: "ms", wait_length: 500 },
    { action: action.destroy, execute: after_destroy }];