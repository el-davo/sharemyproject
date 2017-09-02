export const s3State: S3State = {
  isFetchingS3Configs: false,
  showAddS3WizardModal: false,
  isVerifyingS3Config: false,
  isS3VerificationSuccess: false,
  s3Config: {
    key: '',
    secretKey: '',
    bucket: ''
  },
  s3ConfigForm: {
    key: '',
    secretKey: '',
    bucket: ''
  }
};

export interface S3State {
  isFetchingS3Configs: boolean;
  showAddS3WizardModal: boolean;
  isVerifyingS3Config: boolean;
  isS3VerificationSuccess: boolean;
  s3Config: S3Config,
  s3ConfigForm: S3Config
}

export interface S3Config {
  key: string;
  secretKey: string;
  bucket: string;
}
