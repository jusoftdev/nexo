export interface answer{
    files: Object;
    provider: ProviderValue;
}

export interface choice{
    name: string;
    value: GithubChoiceValue |
           GitlabChoiceValue |
           ProviderChoiceValue;
}

export enum GithubChoiceValue {
    FEATURE_REQUEST = 'FEATURE_REQUEST',
}

export enum GitlabChoiceValue {
    MERGE_REQUEST = 'MERGE_REQUEST',
}

export enum ProviderChoiceValue {
    GITHUB = 'Github',
    GITLAB = 'Gitlab'
}