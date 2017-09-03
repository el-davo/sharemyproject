export const s3State: S3State = {
  isFetchingS3Configs: false,
  showAddS3WizardModal: false,
  isVerifyingS3Config: false,
  isS3VerificationSuccess: false,
  isAddingS3Config: false,
  showDeleteS3ConfigModal: false,
  isDeletingS3Config: false,
  deletingS3Config: {
    id: '',
    name: '',
    key: '',
    secretKey: '',
    bucket: ''
  },
  s3Configs: [],
  s3ConfigForm: {
    name: '',
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
  isAddingS3Config: boolean;
  showDeleteS3ConfigModal: boolean;
  isDeletingS3Config: boolean;
  deletingS3Config: S3Config;
  s3Configs: S3Config[],
  s3ConfigForm: S3Config
}

export interface S3Config {
  id?: string;
  name: string,
  key: string;
  secretKey: string;
  bucket: string;
}
