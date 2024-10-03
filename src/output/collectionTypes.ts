
  const TeamCollection = {

    async one(args, { info }) {
      const query =`
      query {
        archivedTeams(args) {
          archivedAt
          autoArchivePeriod
          autoCloseChildIssues
          autoCloseParentIssues
          autoClosePeriod
          autoCloseStateId
          color
          createdAt
          currentProgress
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
          progressHistory
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
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const AttachmentCollection = {

    async one(args, { info }) {
      const query =`
      query {
        attachment(args) {
          archivedAt
          createdAt
          groupBySource
          metadata
          source
          sourceType
          subtitle
          title
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const IssueCollection = {

    async one(args, { info }) {
      const query =`
      query {
        attachmentIssue(args) {
          addedToCycleAt
          addedToProjectAt
          archivedAt
          autoArchivedAt
          autoClosedAt
          boardOrder
          branchName
          canceledAt
          completedAt
          createdAt
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
          reactionData
          slaBreachesAt
          slaStartedAt
          snoozedUntilAt
          sortOrder
          startedAt
          startedTriageAt
          subIssueSortOrder
          title
          trashed
          triagedAt
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const CommentCollection = {

    async one(args, { info }) {
      const query =`
      query {
        comment(args) {
          archivedAt
          body
          bodyData
          createdAt
          editedAt
          quotedText
          reactionData
          resolvedAt
          summaryText
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const CustomViewCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customView(args) {
          archivedAt
          color
          createdAt
          description
          filterData
          filters
          icon
          modelName
          name
          projectFilterData
          shared
          slugId
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const CustomerCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customer(args) {
          archivedAt
          createdAt
          domains
          externalIds
          logoUrl
          name
          revenue
          size
          slackChannelId
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const CustomerNeedCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customerNeed(args) {
          archivedAt
          body
          bodyData
          createdAt
          priority
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const CustomerStatusCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customerStatus(args) {
          archivedAt
          color
          createdAt
          description
          name
          position
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const CustomerTierCollection = {

    async one(args, { info }) {
      const query =`
      query {
        customerTier(args) {
          archivedAt
          color
          createdAt
          description
          name
          position
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const CycleCollection = {

    async one(args, { info }) {
      const query =`
      query {
        cycle(args) {
          archivedAt
          autoArchivedAt
          completedAt
          completedIssueCountHistory
          completedScopeHistory
          createdAt
          currentProgress
          description
          endsAt
          inProgressScopeHistory
          issueCountHistory
          name
          number
          progress
          progressHistory
          scopeHistory
          startsAt
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const DocumentCollection = {

    async one(args, { info }) {
      const query =`
      query {
        document(args) {
          archivedAt
          color
          content
          contentState
          createdAt
          documentContentId
          hiddenAt
          icon
          slugId
          sortOrder
          title
          trashed
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const EmojiCollection = {

    async one(args, { info }) {
      const query =`
      query {
        emoji(args) {
          archivedAt
          createdAt
          name
          source
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const EntityExternalLinkCollection = {

    async one(args, { info }) {
      const query =`
      query {
        entityExternalLink(args) {
          archivedAt
          createdAt
          label
          sortOrder
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const ExternalUserCollection = {

    async one(args, { info }) {
      const query =`
      query {
        externalUser(args) {
          archivedAt
          avatarUrl
          createdAt
          displayName
          email
          lastSeen
          name
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const FavoriteCollection = {

    async one(args, { info }) {
      const query =`
      query {
        favorite(args) {
          archivedAt
          color
          createdAt
          detail
          folderName
          icon
          predefinedViewType
          sortOrder
          title
          type
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const InitiativeCollection = {

    async one(args, { info }) {
      const query =`
      query {
        initiative(args) {
          archivedAt
          color
          createdAt
          description
          icon
          name
          slugId
          sortOrder
          trashed
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const InitiativeToProjectCollection = {

    async one(args, { info }) {
      const query =`
      query {
        initiativeToProject(args) {
          archivedAt
          createdAt
          sortOrder
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const IntegrationCollection = {

    async one(args, { info }) {
      const query =`
      query {
        integration(args) {
          archivedAt
          createdAt
          service
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const IntegrationTemplateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        integrationTemplate(args) {
          archivedAt
          createdAt
          foreignEntityId
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const IntegrationsSettingsCollection = {

    async one(args, { info }) {
      const query =`
      query {
        integrationsSettings(args) {
          archivedAt
          createdAt
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
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const IssueCollection = {

    async one(args, { info }) {
      const query =`
      query {
        issue(args) {
          addedToCycleAt
          addedToProjectAt
          archivedAt
          autoArchivedAt
          autoClosedAt
          boardOrder
          branchName
          canceledAt
          completedAt
          createdAt
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
          reactionData
          slaBreachesAt
          slaStartedAt
          snoozedUntilAt
          sortOrder
          startedAt
          startedTriageAt
          subIssueSortOrder
          title
          trashed
          triagedAt
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const IssueLabelCollection = {

    async one(args, { info }) {
      const query =`
      query {
        issueLabel(args) {
          archivedAt
          color
          createdAt
          description
          isGroup
          name
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const IssueRelationCollection = {

    async one(args, { info }) {
      const query =`
      query {
        issueRelation(args) {
          archivedAt
          createdAt
          type
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const IssueCollection = {

    async one(args, { info }) {
      const query =`
      query {
        issueVcsBranchSearch(args) {
          addedToCycleAt
          addedToProjectAt
          archivedAt
          autoArchivedAt
          autoClosedAt
          boardOrder
          branchName
          canceledAt
          completedAt
          createdAt
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
          reactionData
          slaBreachesAt
          slaStartedAt
          snoozedUntilAt
          sortOrder
          startedAt
          startedTriageAt
          subIssueSortOrder
          title
          trashed
          triagedAt
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const OrganizationCollection = {

    async one(args, { info }) {
      const query =`
      query {
        organization(args) {
          allowMembersToInvite
          allowedAuthServices
          archivedAt
          createdAt
          createdIssueCount
          customerCount
          deletionRequestedAt
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
          samlSettings
          scimEnabled
          themeSettings
          trialEndsAt
          updatedAt
          urlKey
          userCount
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const OrganizationInviteCollection = {

    async one(args, { info }) {
      const query =`
      query {
        organizationInvite(args) {
          acceptedAt
          archivedAt
          createdAt
          email
          expiresAt
          external
          metadata
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const ProjectCollection = {

    async one(args, { info }) {
      const query =`
      query {
        project(args) {
          archivedAt
          autoArchivedAt
          canceledAt
          color
          completedAt
          completedIssueCountHistory
          completedScopeHistory
          content
          contentState
          createdAt
          currentProgress
          description
          healthUpdatedAt
          icon
          inProgressScopeHistory
          issueCountHistory
          name
          priority
          prioritySortOrder
          progress
          progressHistory
          projectUpdateRemindersPausedUntilAt
          scope
          scopeHistory
          slackIssueComments
          slackIssueStatuses
          slackNewIssue
          slugId
          sortOrder
          startedAt
          state
          trashed
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const ProjectLinkCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectLink(args) {
          archivedAt
          createdAt
          label
          sortOrder
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const ProjectMilestoneCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectMilestone(args) {
          archivedAt
          createdAt
          description
          descriptionState
          name
          sortOrder
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const ProjectRelationCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectRelation(args) {
          anchorType
          archivedAt
          createdAt
          relatedAnchorType
          type
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const ProjectStatusCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectStatus(args) {
          archivedAt
          color
          createdAt
          description
          indefinite
          name
          position
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const ProjectUpdateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectUpdate(args) {
          archivedAt
          body
          bodyData
          createdAt
          diff
          diffMarkdown
          editedAt
          infoSnapshot
          isDiffHidden
          reactionData
          slugId
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const ProjectUpdateInteractionCollection = {

    async one(args, { info }) {
      const query =`
      query {
        projectUpdateInteraction(args) {
          archivedAt
          createdAt
          readAt
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const RoadmapCollection = {

    async one(args, { info }) {
      const query =`
      query {
        roadmap(args) {
          archivedAt
          color
          createdAt
          description
          name
          slugId
          sortOrder
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const RoadmapToProjectCollection = {

    async one(args, { info }) {
      const query =`
      query {
        roadmapToProject(args) {
          archivedAt
          createdAt
          sortOrder
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const TeamCollection = {

    async one(args, { info }) {
      const query =`
      query {
        team(args) {
          archivedAt
          autoArchivePeriod
          autoCloseChildIssues
          autoCloseParentIssues
          autoClosePeriod
          autoCloseStateId
          color
          createdAt
          currentProgress
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
          progressHistory
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
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const TeamMembershipCollection = {

    async one(args, { info }) {
      const query =`
      query {
        teamMembership(args) {
          archivedAt
          createdAt
          owner
          sortOrder
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const TemplateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        template(args) {
          archivedAt
          createdAt
          description
          name
          sortOrder
          type
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const TemplateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        templates(args) {
          archivedAt
          createdAt
          description
          name
          sortOrder
          type
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const TemplateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        templatesForIntegration(args) {
          archivedAt
          createdAt
          description
          name
          sortOrder
          type
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const TimeScheduleCollection = {

    async one(args, { info }) {
      const query =`
      query {
        timeSchedule(args) {
          archivedAt
          createdAt
          externalId
          externalUrl
          name
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const TriageResponsibilityCollection = {

    async one(args, { info }) {
      const query =`
      query {
        triageResponsibility(args) {
          archivedAt
          createdAt
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const UserCollection = {

    async one(args, { info }) {
      const query =`
      query {
        user(args) {
          active
          admin
          archivedAt
          avatarBackgroundColor
          avatarUrl
          calendarHash
          createdAt
          createdIssueCount
          description
          disableReason
          displayName
          email
          guest
          initials
          inviteHash
          isMe
          lastSeen
          name
          statusEmoji
          statusLabel
          statusUntilAt
          timezone
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const UserSettingsCollection = {

    async one(args, { info }) {
      const query =`
      query {
        userSettings(args) {
          archivedAt
          calendarHash
          createdAt
          notificationPreferences
          showFullUserNames
          subscribedToChangelog
          subscribedToDPA
          subscribedToInviteAccepted
          subscribedToPrivacyLegalUpdates
          subscribedToUnreadNotificationsReminder
          unsubscribedFrom
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const UserCollection = {

    async one(args, { info }) {
      const query =`
      query {
        viewer(args) {
          active
          admin
          archivedAt
          avatarBackgroundColor
          avatarUrl
          calendarHash
          createdAt
          createdIssueCount
          description
          disableReason
          displayName
          email
          guest
          initials
          inviteHash
          isMe
          lastSeen
          name
          statusEmoji
          statusLabel
          statusUntilAt
          timezone
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const WebhookCollection = {

    async one(args, { info }) {
      const query =`
      query {
        webhook(args) {
          allPublicTeams
          archivedAt
          createdAt
          enabled
          label
          resourceTypes
          secret
          updatedAt
          url
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  

  const WorkflowStateCollection = {

    async one(args, { info }) {
      const query =`
      query {
        workflowState(args) {
          archivedAt
          color
          createdAt
          description
          name
          position
          type
          updatedAt
        }
      }
      console.log(query);
      //const result = await info.client.query(query);
      //return result.data[arr[1]](arr[2]);`
    }
  };
  