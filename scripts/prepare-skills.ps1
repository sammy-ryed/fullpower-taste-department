# Rebuild from this repository. No Desktop library or private artwork required.
$ErrorActionPreference = 'Stop'
$site = Split-Path -Parent $PSScriptRoot
$names = @('indian-print-maximalism','minimal-type-gallery','colorful-type-poster','vintage-newspaper','animated-cartoon-pop','architectural-color-blocks','cute-retro-pastels')
$downloads = Join-Path $site 'public/downloads'
New-Item -ItemType Directory -Force -Path $downloads | Out-Null
foreach ($name in $names) {
  $source = Join-Path $site "skills/$name"
  if (!(Test-Path -LiteralPath (Join-Path $source 'SKILL.md'))) { throw "Missing skill $name" }
  $images = Get-ChildItem -LiteralPath (Join-Path $source 'references') -File -Recurse |
    Where-Object { $_.Extension -match '^\.(png|jpe?g|webp|gif)$' }
  if ($images) { throw "Reference images must not be published: $name" }
  $zip = Join-Path $downloads "$name.zip"
  Compress-Archive -LiteralPath $source -DestinationPath $zip -Force
  Copy-Item -LiteralPath $zip -Destination (Join-Path $downloads "$name.skill") -Force
}
Write-Output 'Built seven ZIPs and seven identical .skill bundles from skills/.'
