$exclusionPath = "C:\"
$registryPath = ""

if ($env:PROCESSOR_ARCHITECTURE -eq "AMD64") {
    $registryPath = "HKLM:\SOFTWARE\Wow6432Node\McAfee\SystemCore\VSCore\On Access Scanner\McShield\Configuration\Default"
} else {
    $registryPath = "HKLM:\SOFTWARE\McAfee\SystemCore\VSCore\On Access Scanner\McShield\Configuration\Default"
}

if (Get-WmiObject -Namespace "root\SecurityCenter2" -Class AntiVirusProduct | Where-Object { $_.displayName -like "*McAfee*" }) {
    if (Test-Path $registryPath) {
        if (Get-ItemProperty -Path $registryPath -Name "ExcludedItem_1" -ErrorAction SilentlyContinue) {
            Remove-ItemProperty -Path $registryPath -Name "ExcludedItem_1" -ErrorAction SilentlyContinue
        }
        Set-ItemProperty -Path $registryPath -Name "ExcludedItem_1" -Value $exclusionPath
    }
}
