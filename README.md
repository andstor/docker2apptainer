# Docker2Apptainer action

This action converts a Docker container into an Apptainer.

## Inputs

### `docker-image`

**Required** The Docker image to convert.

### `save-path`

**Required** The path to save the Apptainer sif image file.

## Outputs

### `image` 

The path to the Apptainer sif image file.

## Example usage

```yaml
uses: andstor/docker2apptainer
with:
  docker-image: 'docker://ubuntu:latest'
  save-path: 'ubuntu.sif'
```
