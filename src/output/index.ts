import { nodes, state } from "membrane";
  
  async function makeLinearRequest(query: string): Promise<any> {
  const apiKey = state.api_key;
  if (!apiKey) {
    throw new Error('api_key is not set');
  }

  const response = await fetch('https://api.linear.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': apiKey,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
    
export const Root = {
  attachment: () => ({}),
  issue: () => ({}),
  customview: () => ({}),
  customer: () => ({}),
  customerneed: () => ({}),
  customerstatus: () => ({}),
  customertier: () => ({}),
  cycle: () => ({}),
  document: () => ({}),
  emoji: () => ({}),
  entityexternallink: () => ({}),
  externaluser: () => ({}),
  favorite: () => ({}),
  initiative: () => ({}),
  initiativetoproject: () => ({}),
  integration: () => ({}),
  integrationtemplate: () => ({}),
  integrationssettings: () => ({}),
  issue: () => ({}),
  issuelabel: () => ({}),
  issuerelation: () => ({}),
  organizationinvite: () => ({}),
  project: () => ({}),
  projectlink: () => ({}),
  projectmilestone: () => ({}),
  projectrelation: () => ({}),
  projectstatus: () => ({}),
  projectupdate: () => ({}),
  projectupdateinteraction: () => ({}),
  roadmap: () => ({}),
  roadmaptoproject: () => ({}),
  team: () => ({}),
  teammembership: () => ({}),
  template: () => ({}),
  timeschedule: () => ({}),
  triageresponsibility: () => ({}),
  user: () => ({}),
  webhook: () => ({}),
  workflowstate: () => ({})
};

  export const AttachmentCollection = {

    async one(args, { info }) {
      const query =`
      query {
        attachment(id: args.id) {
          groupBySource
          sourceType
          subtitle
          title
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const IssueCollection = {

    async one(args, { info }) {
      const query =`
      query {
        attachmentIssue(id: args.id) {
          boardOrder
          branchName
          customerTicketCount
          description
          descriptionState
          estimate
          identifier
          labelIds
          number
          previousIdentifiers
          priority
          priorityLabel
          prioritySortOrder
          sortOrder
          subIssueSortOrder
          title
          trashed
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const CustomViewCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customView(id: args.id) {
          color
          description
          icon
          modelName
          name
          shared
          slugId
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const CustomerCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customer(id: args.id) {
          domains
          externalIds
          logoUrl
          name
          revenue
          size
          slackChannelId
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const CustomerNeedCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customerNeed(id: args.id) {
          body
          bodyData
          priority
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const CustomerStatusCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customerStatus(id: args.id) {
          color
          description
          name
          position
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const CustomerTierCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customerTier(id: args.id) {
          color
          description
          name
          position
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const CycleCollection = {

    async one(args, { info }) {
      const query =`
      query {
        cycle(id: args.id) {
          completedIssueCountHistory
          completedScopeHistory
          description
          inProgressScopeHistory
          issueCountHistory
          name
          number
          progress
          scopeHistory
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const DocumentCollection = {

    async one(args, { info }) {
      const query =`
      query {
        document(id: args.id) {
          color
          content
          contentState
          documentContentId
          icon
          slugId
          sortOrder
          title
          trashed
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const EmojiCollection = {

    async one(args, { info }) {
      const query =`
      query {
        emoji(id: args.id) {
          name
          source
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const EntityExternalLinkCollection = {

    async one(args, { info }) {
      const query =`
      query {
        entityExternalLink(id: args.id) {
          label
          sortOrder
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const ExternalUserCollection = {

    async one(args, { info }) {
      const query =`
      query {
        externalUser(id: args.id) {
          avatarUrl
          displayName
          email
          name
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const FavoriteCollection = {

    async one(args, { info }) {
      const query =`
      query {
        favorite(id: args.id) {
          color
          detail
          folderName
          icon
          predefinedViewType
          sortOrder
          title
          type
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const InitiativeCollection = {

    async one(args, { info }) {
      const query =`
      query {
        initiative(id: args.id) {
          color
          description
          icon
          name
          slugId
          sortOrder
          trashed
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const InitiativeToProjectCollection = {

    async one(args, { info }) {
      const query =`
      query {
        initiativeToProject(id: args.id) {
          sortOrder
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const IntegrationCollection = {

    async one(args, { info }) {
      const query =`
      query {
        integration(id: args.id) {
          service
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const IntegrationTemplateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        integrationTemplate(id: args.id) {
          foreignEntityId
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const IntegrationsSettingsCollection = {

    async one(args, { info }) {
      const query =`
      query {
        integrationsSettings(id: args.id) {
          slackIssueAddedToTriage
          slackIssueAddedToView
          slackIssueCreated
          slackIssueNewComment
          slackIssueSlaBreached
          slackIssueSlaHighRisk
          slackIssueStatusChangedAll
          slackIssueStatusChangedDone
          slackProjectUpdateCreated
          slackProjectUpdateCreatedToTeam
          slackProjectUpdateCreatedToWorkspace
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const IssueCollection = {

    async one(args, { info }) {
      const query =`
      query {
        issue(id: args.id) {
          boardOrder
          branchName
          customerTicketCount
          description
          descriptionState
          estimate
          identifier
          labelIds
          number
          previousIdentifiers
          priority
          priorityLabel
          prioritySortOrder
          sortOrder
          subIssueSortOrder
          title
          trashed
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const IssueLabelCollection = {

    async one(args, { info }) {
      const query =`
      query {
        issueLabel(id: args.id) {
          color
          description
          isGroup
          name
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const IssueRelationCollection = {

    async one(args, { info }) {
      const query =`
      query {
        issueRelation(id: args.id) {
          type
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const OrganizationInviteCollection = {

    async one(args, { info }) {
      const query =`
      query {
        organizationInvite(id: args.id) {
          email
          external
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const ProjectCollection = {

    async one(args, { info }) {
      const query =`
      query {
        project(id: args.id) {
          color
          completedIssueCountHistory
          completedScopeHistory
          content
          contentState
          description
          icon
          inProgressScopeHistory
          issueCountHistory
          name
          priority
          prioritySortOrder
          progress
          scope
          scopeHistory
          slackIssueComments
          slackIssueStatuses
          slackNewIssue
          slugId
          sortOrder
          state
          trashed
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const ProjectLinkCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectLink(id: args.id) {
          label
          sortOrder
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const ProjectMilestoneCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectMilestone(id: args.id) {
          description
          descriptionState
          name
          sortOrder
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const ProjectRelationCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectRelation(id: args.id) {
          anchorType
          relatedAnchorType
          type
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const ProjectStatusCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectStatus(id: args.id) {
          color
          description
          indefinite
          name
          position
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const ProjectUpdateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectUpdate(id: args.id) {
          body
          bodyData
          diffMarkdown
          isDiffHidden
          slugId
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const ProjectUpdateInteractionCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectUpdateInteraction(id: args.id) {
          
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const RoadmapCollection = {

    async one(args, { info }) {
      const query =`
      query {
        roadmap(id: args.id) {
          color
          description
          name
          slugId
          sortOrder
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const RoadmapToProjectCollection = {

    async one(args, { info }) {
      const query =`
      query {
        roadmapToProject(id: args.id) {
          sortOrder
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const TeamCollection = {

    async one(args, { info }) {
      const query =`
      query {
        team(id: args.id) {
          autoArchivePeriod
          autoCloseChildIssues
          autoCloseParentIssues
          autoClosePeriod
          autoCloseStateId
          color
          cycleCalenderUrl
          cycleCooldownTime
          cycleDuration
          cycleIssueAutoAssignCompleted
          cycleIssueAutoAssignStarted
          cycleLockToActive
          cycleStartDay
          cyclesEnabled
          defaultIssueEstimate
          defaultTemplateForMembersId
          defaultTemplateForNonMembersId
          description
          groupIssueHistory
          icon
          inviteHash
          issueCount
          issueEstimationAllowZero
          issueEstimationExtended
          issueEstimationType
          issueOrderingNoPriorityFirst
          issueSortOrderDefaultToBottom
          joinByDefault
          key
          name
          private
          requirePriorityToLeaveTriage
          scimGroupName
          scimManaged
          setIssueSortOrderOnStateChange
          slackIssueComments
          slackIssueStatuses
          slackNewIssue
          timezone
          triageEnabled
          upcomingCycleCount
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const TeamMembershipCollection = {

    async one(args, { info }) {
      const query =`
      query {
        teamMembership(id: args.id) {
          owner
          sortOrder
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const TemplateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        template(id: args.id) {
          description
          name
          sortOrder
          type
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const TimeScheduleCollection = {

    async one(args, { info }) {
      const query =`
      query {
        timeSchedule(id: args.id) {
          externalId
          externalUrl
          name
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const TriageResponsibilityCollection = {

    async one(args, { info }) {
      const query =`
      query {
        triageResponsibility(id: args.id) {
          
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const UserCollection = {

    async one(args, { info }) {
      const query =`
      query {
        user(id: args.id) {
          active
          admin
          avatarBackgroundColor
          avatarUrl
          calendarHash
          createdIssueCount
          description
          disableReason
          displayName
          email
          guest
          initials
          inviteHash
          isMe
          name
          statusEmoji
          statusLabel
          timezone
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const WebhookCollection = {

    async one(args, { info }) {
      const query =`
      query {
        webhook(id: args.id) {
          allPublicTeams
          enabled
          label
          resourceTypes
          secret
          url
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  

  export const WorkflowStateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        workflowState(id: args.id) {
          color
          description
          name
          position
          type
        }
      }`
      const result = await makeLinearRequest(query);
      const data = result.data;
      if (data) {
        const firstKey = Object.keys(data)[0];
        if (firstKey) {
          return data[firstKey];
        }
      }
      return null;
    }
  };
  