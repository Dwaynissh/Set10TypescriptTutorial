import os from "node:os";

// OS ARCH
const myPcArch = os.arch();
console.log("My PC Architecture is..", myPcArch);

// OS CPUS
const myPcCPUS = os.cpus();
console.log("My PC CPU is..", myPcCPUS);

// OS FREEMEMORY

const myPcMemory = os.freemem();
console.log("My PC Memory is..", myPcMemory);

// OS HOMEDIR

const myPcPath = os.homedir();
console.log("My PC Directory is..", myPcPath);

// OS VERSION

const myPcVersion = os.version();
console.log("My PC Version is..", myPcVersion);

// OS RELEASE
const myPcRelease = os.release();
console.log("My PC Release is..", myPcRelease);

// OS PLATFORM
const myPcPlatform = os.platform();
console.log("My PC Platform is..", myPcPlatform);

// OS HOSTNAME
const myPcHostname = os.hostname();
console.log("My PC Hostname is..", myPcHostname);

// OS NETWORK
const myPcNetwork = os.networkInterfaces();
console.log("My PC Network is..", myPcNetwork);

// OS MACHINE
const myPcMachine = os.machine();
console.log("My PC Machine is..", myPcMachine);

// OS TYPE
const myPcType = os.type();
console.log("My PC Type is..", myPcType);

// OS UPTIME
console.clear();
const myPcUptime = os.uptime();
console.log("My PC Uptime is..", myPcUptime);

// Calculate Space In PC

const checkMySpace = () => {
  let mem: number = os.freemem() / (1024 * 1024 * 1024);

  console.log(`${parseFloat(mem.toFixed(2))}GB Available`);

  let totalMem: number = os.totalmem() / (1024 * 1024 * 1024);

  console.log(`${parseFloat(totalMem.toFixed(2))}GB space Remaining`);
};

checkMySpace();
