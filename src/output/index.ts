export const Root = {
  team: () => ({}),
  attachment: () => ({}),
  issue: () => ({}),
  comment: () => ({}),
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
  issue: () => ({}),
  organization: () => ({}),
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
  template: () => ({}),
  template: () => ({}),
  timeschedule: () => ({}),
  triageresponsibility: () => ({}),
  user: () => ({}),
  usersettings: () => ({}),
  user: () => ({}),
  webhook: () => ({}),
  workflowstate: () => ({})
};

  export const TeamCollection = {

    async one(args, { info }) {
      const query =`
      query {
        archivedTeams() {
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
    }
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
    }
  };
  

  export const CommentCollection = {

    async one(args, { info }) {
      const query =`
      query {
        comment(id: args.id) {
          body
          bodyData
          quotedText
          summaryText
          url
        }
      }`
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
    }
  };
  

  export const IssueCollection = {

    async one(args, { info }) {
      const query =`
      query {
        issueVcsBranchSearch(id: args.id) {
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
    }
  };
  

  export const OrganizationCollection = {

    async one(args, { info }) {
      const query =`
      query {
        organization() {
          allowMembersToInvite
          allowedAuthServices
          createdIssueCount
          customerCount
          fiscalYearStartMonth
          gitBranchFormat
          gitLinkbackMessagesEnabled
          gitPublicLinkbackMessagesEnabled
          logoUrl
          name
          periodUploadVolume
          previousUrlKeys
          projectUpdateReminderFrequencyInWeeks
          projectUpdateRemindersHour
          roadmapEnabled
          samlEnabled
          scimEnabled
          urlKey
          userCount
        }
      }`
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
    }
  };
  

  export const ProjectUpdateInteractionCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectUpdateInteraction(id: args.id) {
          
        }
      }`
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
    }
  };
  

  export const TemplateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        templates() {
          description
          name
          sortOrder
          type
        }
      }`
    }
  };
  

  export const TemplateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        templatesForIntegration(id: args.id) {
          description
          name
          sortOrder
          type
        }
      }`
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
    }
  };
  

  export const TriageResponsibilityCollection = {

    async one(args, { info }) {
      const query =`
      query {
        triageResponsibility(id: args.id) {
          
        }
      }`
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
    }
  };
  

  export const UserSettingsCollection = {

    async one(args, { info }) {
      const query =`
      query {
        userSettings() {
          calendarHash
          showFullUserNames
          subscribedToChangelog
          subscribedToDPA
          subscribedToInviteAccepted
          subscribedToPrivacyLegalUpdates
          subscribedToUnreadNotificationsReminder
          unsubscribedFrom
        }
      }`
    }
  };
  

  export const UserCollection = {

    async one(args, { info }) {
      const query =`
      query {
        viewer() {
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
    }
  };
  