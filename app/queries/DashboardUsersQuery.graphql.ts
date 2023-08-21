/**
 * @generated SignedSource<<2c7496aae998dab81de88f3a1c6207a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type SearchType = "DISCUSSION" | "ISSUE" | "REPOSITORY" | "USER" | "%future added value";
export type DashboardUsersQuery$variables = {
  first?: number | null;
  query: string;
  type: SearchType;
};
export type DashboardUsersQuery$data = {
  readonly search: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly avatarUrl?: any;
        readonly id?: string;
        readonly isSiteAdmin?: boolean;
        readonly login?: string;
        readonly name?: string | null;
        readonly repositories?: {
          readonly totalCount: number;
        };
      } | null;
    } | null> | null;
    readonly userCount: number;
  };
};
export type DashboardUsersQuery = {
  response: DashboardUsersQuery$data;
  variables: DashboardUsersQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v3 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Variable",
    "name": "type",
    "variableName": "type"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userCount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isSiteAdmin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "repositories",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardUsersQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "SearchResultItemConnection",
            "kind": "LinkedField",
            "name": "search",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchResultItemEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "DashboardUsersQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "SearchResultItemConnection",
            "kind": "LinkedField",
            "name": "search",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchResultItemEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v5/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "clientAbstractTypes": {
      "__isNode": [
        "AddedToMergeQueueEvent",
        "AddedToProjectEvent",
        "App",
        "AssignedEvent",
        "AutoMergeDisabledEvent",
        "AutoMergeEnabledEvent",
        "AutoRebaseEnabledEvent",
        "AutoSquashEnabledEvent",
        "AutomaticBaseChangeFailedEvent",
        "AutomaticBaseChangeSucceededEvent",
        "BaseRefChangedEvent",
        "BaseRefDeletedEvent",
        "BaseRefForcePushedEvent",
        "Blob",
        "Bot",
        "BranchProtectionRule",
        "BypassForcePushAllowance",
        "BypassPullRequestAllowance",
        "CWE",
        "CheckRun",
        "CheckSuite",
        "ClosedEvent",
        "CodeOfConduct",
        "CommentDeletedEvent",
        "Commit",
        "CommitComment",
        "CommitCommentThread",
        "Comparison",
        "ConnectedEvent",
        "ConvertToDraftEvent",
        "ConvertedNoteToIssueEvent",
        "ConvertedToDiscussionEvent",
        "CrossReferencedEvent",
        "DemilestonedEvent",
        "DependencyGraphManifest",
        "DeployKey",
        "DeployedEvent",
        "Deployment",
        "DeploymentEnvironmentChangedEvent",
        "DeploymentReview",
        "DeploymentStatus",
        "DisconnectedEvent",
        "Discussion",
        "DiscussionCategory",
        "DiscussionComment",
        "DiscussionPoll",
        "DiscussionPollOption",
        "DraftIssue",
        "Enterprise",
        "EnterpriseAdministratorInvitation",
        "EnterpriseIdentityProvider",
        "EnterpriseRepositoryInfo",
        "EnterpriseServerInstallation",
        "EnterpriseServerUserAccount",
        "EnterpriseServerUserAccountEmail",
        "EnterpriseServerUserAccountsUpload",
        "EnterpriseUserAccount",
        "Environment",
        "ExternalIdentity",
        "Gist",
        "GistComment",
        "HeadRefDeletedEvent",
        "HeadRefForcePushedEvent",
        "HeadRefRestoredEvent",
        "IpAllowListEntry",
        "Issue",
        "IssueComment",
        "Label",
        "LabeledEvent",
        "Language",
        "License",
        "LinkedBranch",
        "LockedEvent",
        "Mannequin",
        "MarkedAsDuplicateEvent",
        "MarketplaceCategory",
        "MarketplaceListing",
        "MembersCanDeleteReposClearAuditEntry",
        "MembersCanDeleteReposDisableAuditEntry",
        "MembersCanDeleteReposEnableAuditEntry",
        "MentionedEvent",
        "MergeQueue",
        "MergeQueueEntry",
        "MergedEvent",
        "MigrationSource",
        "Milestone",
        "MilestonedEvent",
        "MovedColumnsInProjectEvent",
        "OIDCProvider",
        "OauthApplicationCreateAuditEntry",
        "OrgAddBillingManagerAuditEntry",
        "OrgAddMemberAuditEntry",
        "OrgBlockUserAuditEntry",
        "OrgConfigDisableCollaboratorsOnlyAuditEntry",
        "OrgConfigEnableCollaboratorsOnlyAuditEntry",
        "OrgCreateAuditEntry",
        "OrgDisableOauthAppRestrictionsAuditEntry",
        "OrgDisableSamlAuditEntry",
        "OrgDisableTwoFactorRequirementAuditEntry",
        "OrgEnableOauthAppRestrictionsAuditEntry",
        "OrgEnableSamlAuditEntry",
        "OrgEnableTwoFactorRequirementAuditEntry",
        "OrgInviteMemberAuditEntry",
        "OrgInviteToBusinessAuditEntry",
        "OrgOauthAppAccessApprovedAuditEntry",
        "OrgOauthAppAccessBlockedAuditEntry",
        "OrgOauthAppAccessDeniedAuditEntry",
        "OrgOauthAppAccessRequestedAuditEntry",
        "OrgOauthAppAccessUnblockedAuditEntry",
        "OrgRemoveBillingManagerAuditEntry",
        "OrgRemoveMemberAuditEntry",
        "OrgRemoveOutsideCollaboratorAuditEntry",
        "OrgRestoreMemberAuditEntry",
        "OrgUnblockUserAuditEntry",
        "OrgUpdateDefaultRepositoryPermissionAuditEntry",
        "OrgUpdateMemberAuditEntry",
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntry",
        "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry",
        "Organization",
        "OrganizationIdentityProvider",
        "OrganizationInvitation",
        "OrganizationMigration",
        "Package",
        "PackageFile",
        "PackageTag",
        "PackageVersion",
        "PinnedDiscussion",
        "PinnedEvent",
        "PinnedIssue",
        "PrivateRepositoryForkingDisableAuditEntry",
        "PrivateRepositoryForkingEnableAuditEntry",
        "Project",
        "ProjectCard",
        "ProjectColumn",
        "ProjectV2",
        "ProjectV2Field",
        "ProjectV2Item",
        "ProjectV2ItemFieldDateValue",
        "ProjectV2ItemFieldIterationValue",
        "ProjectV2ItemFieldNumberValue",
        "ProjectV2ItemFieldSingleSelectValue",
        "ProjectV2ItemFieldTextValue",
        "ProjectV2IterationField",
        "ProjectV2SingleSelectField",
        "ProjectV2View",
        "ProjectV2Workflow",
        "PublicKey",
        "PullRequest",
        "PullRequestCommit",
        "PullRequestCommitCommentThread",
        "PullRequestReview",
        "PullRequestReviewComment",
        "PullRequestReviewThread",
        "PullRequestThread",
        "Push",
        "PushAllowance",
        "Reaction",
        "ReadyForReviewEvent",
        "Ref",
        "ReferencedEvent",
        "Release",
        "ReleaseAsset",
        "RemovedFromMergeQueueEvent",
        "RemovedFromProjectEvent",
        "RenamedTitleEvent",
        "ReopenedEvent",
        "RepoAccessAuditEntry",
        "RepoAddMemberAuditEntry",
        "RepoAddTopicAuditEntry",
        "RepoArchivedAuditEntry",
        "RepoChangeMergeSettingAuditEntry",
        "RepoConfigDisableAnonymousGitAccessAuditEntry",
        "RepoConfigDisableCollaboratorsOnlyAuditEntry",
        "RepoConfigDisableContributorsOnlyAuditEntry",
        "RepoConfigDisableSockpuppetDisallowedAuditEntry",
        "RepoConfigEnableAnonymousGitAccessAuditEntry",
        "RepoConfigEnableCollaboratorsOnlyAuditEntry",
        "RepoConfigEnableContributorsOnlyAuditEntry",
        "RepoConfigEnableSockpuppetDisallowedAuditEntry",
        "RepoConfigLockAnonymousGitAccessAuditEntry",
        "RepoConfigUnlockAnonymousGitAccessAuditEntry",
        "RepoCreateAuditEntry",
        "RepoDestroyAuditEntry",
        "RepoRemoveMemberAuditEntry",
        "RepoRemoveTopicAuditEntry",
        "Repository",
        "RepositoryInvitation",
        "RepositoryMigration",
        "RepositoryRule",
        "RepositoryRuleset",
        "RepositoryRulesetBypassActor",
        "RepositoryTopic",
        "RepositoryVisibilityChangeDisableAuditEntry",
        "RepositoryVisibilityChangeEnableAuditEntry",
        "RepositoryVulnerabilityAlert",
        "ReviewDismissalAllowance",
        "ReviewDismissedEvent",
        "ReviewRequest",
        "ReviewRequestRemovedEvent",
        "ReviewRequestedEvent",
        "SavedReply",
        "SecurityAdvisory",
        "SponsorsActivity",
        "SponsorsListing",
        "SponsorsListingFeaturedItem",
        "SponsorsTier",
        "Sponsorship",
        "SponsorshipNewsletter",
        "Status",
        "StatusCheckRollup",
        "StatusContext",
        "SubscribedEvent",
        "Tag",
        "Team",
        "TeamAddMemberAuditEntry",
        "TeamAddRepositoryAuditEntry",
        "TeamChangeParentTeamAuditEntry",
        "TeamDiscussion",
        "TeamDiscussionComment",
        "TeamRemoveMemberAuditEntry",
        "TeamRemoveRepositoryAuditEntry",
        "Topic",
        "TransferredEvent",
        "Tree",
        "UnassignedEvent",
        "UnlabeledEvent",
        "UnlockedEvent",
        "UnmarkedAsDuplicateEvent",
        "UnpinnedEvent",
        "UnsubscribedEvent",
        "User",
        "UserBlockedEvent",
        "UserContentEdit",
        "UserStatus",
        "VerifiableDomain",
        "Workflow",
        "WorkflowRun",
        "WorkflowRunFile"
      ]
    }
  },
  "params": {
    "cacheID": "8bd66b34c867d01d63e23b5f76b355d5",
    "id": null,
    "metadata": {},
    "name": "DashboardUsersQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "296340afbbd67ce5e73c2aff04da4b31";

export default node;
