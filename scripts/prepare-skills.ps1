param([string]$Library = (Split-Path -Parent $PSScriptRoot | Split-Path -Parent))
$ErrorActionPreference = 'Stop'
$site = Split-Path -Parent $PSScriptRoot
$names = @('indian-print-maximalism','minimal-type-gallery','colorful-type-poster','vintage-newspaper','animated-cartoon-pop','architectural-color-blocks','cute-retro-pastels')
$skillsOut = Join-Path $site 'skills'
$downloads = Join-Path $site 'public/downloads'
New-Item -ItemType Directory -Force -Path $skillsOut,$downloads | Out-Null
foreach ($name in $names) {
  $source = Join-Path $Library $name
  if (!(Test-Path -LiteralPath (Join-Path $source 'SKILL.md'))) { throw "Missing skill $name" }
  $target = Join-Path $skillsOut $name
  # Publish text guidance and original/licensed implementation assets only.
  # Source moodboards and reference screenshots remain in the local library.
  Get-ChildItem -LiteralPath $source -File -Recurse | ForEach-Object {
    $relative = $_.FullName.Substring($source.TrimEnd('\','/').Length + 1)
    if ($relative -match '^references[\\/].*\.(png|jpe?g|webp|gif)$') { return }
    $destination = Join-Path $target $relative
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $destination) | Out-Null
    Copy-Item -LiteralPath $_.FullName -Destination $destination -Force
  }
  $zip = Join-Path $downloads "$name.zip"
  Compress-Archive -LiteralPath $target -DestinationPath $zip -Force
  Copy-Item -LiteralPath $zip -Destination (Join-Path $downloads "$name.skill") -Force
}
Write-Output 'Prepared all seven public skills and fourteen download archives. Original private reference images were not copied.'
