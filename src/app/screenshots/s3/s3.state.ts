export const s3State: S3State = {
  isFetchingS3Configs: false,
  s3Config: {
    key: '',
    secretKey: '',
    bucket: ''
  }
};

export interface S3State {
  isFetchingS3Configs: boolean;
  s3Config: S3Config
}

export interface S3Config {
  key: string;
  secretKey: string;
  bucket: string;
}
